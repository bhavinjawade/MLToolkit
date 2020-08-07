import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { CurrentProjectService } from '../current-project.service';

@Component({
  selector: 'app-new-project-box',
  templateUrl: './new-project-box.component.html',
  styleUrls: ['./new-project-box.component.css']
})
export class NewProjectBoxComponent implements OnInit {
  currentProject: any;

  @Output() closeBoxEmit: EventEmitter<any> = new EventEmitter<any>();
  closeBox(): void{
    this.closeBoxEmit.emit()
  }

  config: any;
  constructor(private dataServiceService: DataServiceService, private currentProjectService: CurrentProjectService) {
    this.currentProjectService.execChange.subscribe((value) => { 
      this.currentProject = value;
    });
  }

  ngOnInit(): void {
  }

  createProject(project_name: string): void{
      this.dataServiceService.createProject(project_name)
      .subscribe(response => {
        this.currentProject = response.data;
        this.currentProjectService.updateProjectInfo(this.currentProject);
      });
      this.closeBox();
    }
}
