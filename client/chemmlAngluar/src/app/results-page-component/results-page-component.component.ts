import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
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

  constructor(private currentProjectService: CurrentProjectService, private dataServiceService: DataServiceService) { }

  ngAfterViewInit(): void {

    this.dataServiceService.getResults(this.project_name)
    .subscribe(response => {
      var results = response["data"];
      var keys = Object.keys(results);
      for(var i = 0; i < keys.length; i++){
        this.results.push(results[keys[i]]);
      }
      console.log(this.results);
    });
  }

}
