import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { CurrentProjectService } from '../current-project.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  projectsList: any;
  renderList: any;
  selectedProject: any;

  @Output() closeBoxEmit: EventEmitter<any> = new EventEmitter<any>();
  goToProjectCanvas(): void{
    this.closeBoxEmit.emit()
  }

  createProject(projectname): void{
    console.log("Create a new project");
  }

  constructor(private dataServiceService: DataServiceService, private currentProjectService: CurrentProjectService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.dataServiceService.getProjects()
    .subscribe(projects => {
      this.projectsList = projects.data; 
      this.renderList = this.projectsList;
      console.log(projects)
    });
  }

  selectProject(element_id, project):void {
    let element = document.getElementById(element_id);
    let parent = element.parentElement;
    for (var i = 0; i < parent.children.length; i++) {
      console.log(parent.children[i].classList);
      if (parent.children[i].classList.contains("selectedProject")) {
        parent.children[i].classList.remove("selectedProject")
        parent.children[i].classList.add("project_list_item");
        break;
      }  
    }
    this.selectedProject = project;
    element.classList.remove("project_list_item");
    element.classList.add("selectedProject");     
  }

  searchFilter(event): void{
    let searchString = event.srcElement.value;
    if(searchString.length != 0){
      this.renderList = [];
      this.projectsList.forEach((value) => {
        if(value.project_name.includes(searchString)){
          this.renderList.push(value);
          }
        });
      }
    else{
      this.renderList = this.projectsList;
    }
  }

  openProject(): void{
    this.currentProjectService.updateProjectInfo(this.selectedProject);
    this.goToProjectCanvas();
  }

  newProject(): void{

  }

  goHome(event): void{

  }
}
