import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { element } from 'protractor';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-project-info-component',
  templateUrl: './project-info-component.component.html',
  styleUrls: ['./project-info-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectInfoComponentComponent implements OnInit {

  @Input() project_name: string;
  currentTag = "";
  currentProject: any;
  
  @Output() closeBoxEmit: EventEmitter<any> = new EventEmitter<any>();
  closeBox(): void{
    this.closeBoxEmit.emit()
  }

  constructor(private elementRef:ElementRef, private dataServiceService: DataServiceService) { 
  }

  onKeydownEvent(event: KeyboardEvent){
    if (event.key === "Enter") {
      this.currentTag = (<HTMLInputElement>document.getElementById("tags")).value;
      this.currentProject.project_properties.tag_list.push(this.currentTag);
      (<HTMLInputElement>document.getElementById("tags")).value = "";
      document.getElementById("tags_show").innerHTML = "";
      for(var i = 0; i < this.currentProject.project_properties.tag_list.length; i++){
        document.getElementById("tags_show").innerHTML += "<span spellcheck='false' class = 'tags-span'>" + this.currentProject.project_properties.tag_list[i] + "<span class='close-tag' id='"+i+"'>X</span></span>";
        this.currentTag = "";
        this.elementRef.nativeElement.querySelectorAll('.close-tag').forEach((item)=>{
          item.addEventListener('click',this.deleteTag.bind(this))
        });
        console.log(this.currentProject.project_properties.tag_list);
      }
    }
  }


  ngOnInit(): void {
    document.getElementById("tags_show").innerHTML = "";
    this.dataServiceService.getProject(this.project_name).subscribe(response => {
      this.currentProject = response["data"];
      for(var i = 0; i < this.currentProject.project_properties.tag_list.length; i++){
        document.getElementById("tags_show").innerHTML += "<span spellcheck='false' class = 'tags-span'>" + this.currentProject.project_properties.tag_list[i] + "<span class='close-tag' id='"+i+"'>X</span></span>";
        this.currentTag = "";
        console.log(this.currentProject.project_properties.tag_list);
      }
      this.elementRef.nativeElement.querySelectorAll('.close-tag').forEach((item)=>{
        item.addEventListener('click',this.deleteTag.bind(this))
      });
    });
  }

  deleteTag(elem){
    this.currentProject.project_properties.tag_list.splice(parseInt(elem.srcElement.id), 1);
    document.getElementById("tags_show").innerHTML = "";
    for(var i = 0; i < this.currentProject.project_properties.tag_list.length; i++){
      document.getElementById("tags_show").innerHTML += "<span spellcheck='false' class = 'tags-span'>" + this.currentProject.project_properties.tag_list[i] + "<span class='close-tag' id='"+i+"'>X</span></span>";
      this.currentTag = "";
      console.log(this.currentProject.project_properties.tag_list);
    }
    this.elementRef.nativeElement.querySelectorAll('.close-tag').forEach((item)=>{
      item.addEventListener('click',this.deleteTag.bind(this))
    });
  }

  saveProject(){
    this.closeBox();
    this.currentProject.project_name = (<HTMLInputElement>document.getElementById("project_name")).value;
    this.currentProject.project_desc = (<HTMLInputElement>document.getElementById("project_desc")).value;
    this.dataServiceService.updateProjectInfo(this.currentProject, this.project_name).subscribe(response => {
      console.log("Updated Project",response);
    });
  }
}
