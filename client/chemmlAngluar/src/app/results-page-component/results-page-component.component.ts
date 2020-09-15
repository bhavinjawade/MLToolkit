import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { CurrentProjectService } from '.././current-project.service';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-results-page-component',
  templateUrl: './results-page-component.component.html',
  styleUrls: ['./results-page-component.component.css']
})
export class ResultsPageComponentComponent implements AfterViewInit {

  currentProject: any;
  @Input() project_name: any;
  results: any[] = [];
  expanded = 0;
  csv_data: any;
  noResults = false;
  csv_header: any;

  @Output() closeEvent = new EventEmitter();

  constructor(private currentProjectService: CurrentProjectService, private dataServiceService: DataServiceService) { }

  closeResultsPage(){
    this.closeEvent.emit("closing");
  }

  ngAfterViewInit(): void {

    this.dataServiceService.getResults(this.project_name)
    .subscribe(response => {
      var results = response["data"];
      var keys = Object.keys(results);
      if(keys.length==0){
        this.noResults = true;
      }
      for(var i = 0; i < keys.length; i++){
        this.results.push(results[keys[i]]);
      }
      console.log(this.results);
    });
  }

  checkForCSV(result){
    if(result.result.result_format == 'csv'){
      console.log("checking for CSV");
      var data = this.csvToJSON(result.result.data);
      this.csv_data = data.data;
      this.csv_header = data.headers;
      console.log(this.csv_data, this.csv_header);
      return true;
    }
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
        lineObj[valueName] = lineValues[index]
          .replace(/%22(.*?)%22/gm, (item) => decodeURIComponent(item))
          .trim();
      })
      return lineObj; 
    }); 
  
    return { data, headers };
  }

}
