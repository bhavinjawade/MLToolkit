import { QueryValueType } from '@angular/compiler/src/core';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as Chart from 'chart.js';
import { ChartDataSets, ChartOptions } from 'chart.js';
import * as d3 from 'd3';
import { Label, Color } from 'ng2-charts';
import { TimeoutError } from 'rxjs';
import { DataServiceService } from '../data-service.service';


@Component({
  selector: 'app-visualize-main',
  templateUrl: './visualize-main.component.html',
  styleUrls: ['./visualize-main.component.css']
})

export class VisualizeMainComponent implements OnInit {

  @Input() preselected_file: any;
  @Input() project_name: string;
  @Output() closeBoxEmit: EventEmitter<any> = new EventEmitter<any>();
  closeBox(): void {
    this.closeBoxEmit.emit()
  }
  showSQLBox = false;
  loadingMessage = "Loading CSV to memory";
  loading = false;
  column_names = [];
  projectFiles = [];
  csvFiles = [];
  graphType = 'scatter';
  select_file: any;
  selected_file: any;
  x_list = [];
  colors = [];
  y_list = [];
  Colors = {};
  color_names = {
    aqua: "#00ffff",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    black: "#000000",
    blue: "#0000ff",
    brown: "#a52a2a",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgrey: "#a9a9a9",
    darkgreen: "#006400",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkviolet: "#9400d3",
    fuchsia: "#ff00ff",
    gold: "#ffd700",
    green: "#008000",
    indigo: "#4b0082",
    khaki: "#f0e68c",
    lightblue: "#add8e6",
    lightcyan: "#e0ffff",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    magenta: "#ff00ff",
    maroon: "#800000",
    navy: "#000080",
    olive: "#808000",
    orange: "#ffa500",
    pink: "#ffc0cb",
    purple: "#800080",
    violet: "#800080",
    red: "#ff0000",
    silver: "#c0c0c0",
    white: "#ffffff",
    yellow: "#ffff00"
  };

  
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];
  csv_data: any;
  csv_header: any;
  graph_data: any;
  chart: any;
  constructor(private dataServiceService: DataServiceService) { }

  selectGraphType(event: Event) {
    this.graphType = (event.target as Element).id;
    this.chart.destroy();
    this.makeChart(this.graph_data);
  }

  get_csv_file(file_name) {
    this.loading = true;
    this.dataServiceService.getCSVFile(this.project_name, file_name).then((data) => {
      console.log(data);
      this.loading = false;
      this.column_names = data.columns;
      console.log(this.column_names);
      this.graph_data = data;
      this.makeChart(data);
    });
  }

  getRandomColor() {
      var result;
      var count = 0;
      result = this.color_names[Object.keys(this.color_names)[
        Math.floor(Math.random()*Object.keys(this.color_names).length)]];      
      return result; 
  }

  executeSQLQuery(query, csv_name) {
    console.log(query, csv_name);
    this.dataServiceService.runSQLQuery(this.project_name, query, csv_name).subscribe(result => {
      console.log("Result: ", result)
    });
  }

  previewSQLQuery(query, csv_name) {
    console.log(query, csv_name);
    this.dataServiceService.previewSQLQuery(this.project_name, query, csv_name).subscribe(result => {
      console.log("Result: ", result["data"]);
      var data = this.csvToJSON(result["data"]);
      this.csv_data = data.data;
      this.csv_header = data.headers;
      console.log(this.csv_data, this.csv_header);
    });
  }

  csvToJSON(csv: string) {
    const lines: string[] = csv
      .replace(/"(.*?)"/gm, (item) => encodeURIComponent(item))
      .split('\n');
    const headers: string[] = lines.shift().split(',');
    const data: any[] = lines.map((lineString, index) => {
      const lineObj = {};
      const lineValues = lineString.split(',');
  
      headers.forEach((valueName, index) => {
        console.log(valueName, index);
        lineObj[valueName] = lineValues[index]
          .replace(/%22(.*?)%22/gm, (item) => decodeURIComponent(item))
          .trim();
      })
      return lineObj; 
    }); 
  
    return { data, headers };
  }

  openSQLBox() {
    if(this.showSQLBox)
      this.showSQLBox = false;
    else
      this.showSQLBox = true;
  }

  makeChart(data) {
    var to_fill = false;
    var x_labels;
    if (this.x_list.every((val, i, arr) => val === arr[0])) {
      x_labels = this.x_list[0];
    }

    var x = data.map(function (d) {
      return +d[x_labels];
    });

    var y_maps = []
    var colors = []
    for (var i = 0; i < this.y_list.length; i++) {
      let y_label = this.y_list[i];
      y_maps.push(data.map(function (d) {
        return {
          x: +d[x_labels],
          y: +d[y_label]
        };
      }));
    }
    
    if (this.graphType.includes("bar") && this.graphType.includes("Bar")) {
      to_fill = true;
    }

    var dataSets = []
    for(var i = 0; i < y_maps.length; i++){
      let y_label = this.y_list[i];
      dataSets.push({
        label: y_label,
        fill: false,
        lineTension: 0.1,
        backgroundColor: this.colors[i],
        borderColor: this.colors[i], // The main line color
        borderCapStyle: 'square',
        borderDash: [], // try [5, 15] for instance
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: "black",
        pointBackgroundColor: this.colors[i],
        pointBorderWidth: 1,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: "yellow",
        pointHoverBorderColor: "brown",
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        pointHitRadius: 20,
        pointHitDetectionRadius : 20,
        data: y_maps[i],
        spanGaps: true,
      })
    }

    this.chart = new Chart('chart', {
      type: this.graphType,
      data: {
        labels: x,
        datasets: dataSets
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: true
        },
      },
    });
  }

  ngOnInit(): void {
    console.log(this.project_name);
    this.dataServiceService.getProjectFilesWithDetails(this.project_name).subscribe(project_files => {
      this.projectFiles = project_files["data"];
      console.log(this.projectFiles);
      for (var i in this.projectFiles) {
        console.log(this.projectFiles[i].file_name.split(".").pop())
        if (this.projectFiles[i].file_name.split(".").pop() == 'csv') {
          this.csvFiles.push(this.projectFiles[i])
        }
      }
      console.log(this.csvFiles);
    });

    this.get_csv_file(this.preselected_file.file_name);
  }

  generateGraph() {
    for (var i = 0; i < this.y_list.length; i++) {
      this.colors.push(this.getRandomColor())
    }
    this.makeChart(this.graph_data);
  }

  selectFile(file, file_index) {
    //document.getElementById("csv_load").setAttribute("value",file.file_path);
    this.select_file = file_index;
    this.selected_file = file;
    this.get_csv_file(file.file_name);
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    console.log(ev)
    ev.dataTransfer.setData("text", ev.target.id);
  }

  drop(ev) {
    console.log("drop", ev)
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var nodeCopy = document.getElementById(data).cloneNode(true);
    (<HTMLElement>nodeCopy).id = ev.srcElement.id + "_copy"; /* We cannot use the same ID */
    ev.target.appendChild(nodeCopy);
    if (ev.target.id == 'x_column') {
      this.x_list.push((<HTMLElement>nodeCopy).innerHTML);
    }
    else if (ev.target.id == 'y_column') {
      this.y_list.push((<HTMLElement>nodeCopy).innerHTML);
    }
    console.log(this.x_list, this.y_list);
  }

  customTB(item, index) {
    return `${item.id}-${index}`;
  }
}
