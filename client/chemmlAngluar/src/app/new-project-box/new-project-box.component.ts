import { Component, ViewEncapsulation,OnInit, Output, EventEmitter } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { CurrentProjectService } from '../current-project.service';

@Component({
  selector: 'app-new-project-box',
  templateUrl: './new-project-box.component.html',
  styleUrls: ['./new-project-box.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewProjectBoxComponent implements OnInit {
  currentProject: any;
  currentTag = "";
  tagslist = [];

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

  onKeydownEvent(event: KeyboardEvent){
    if (event.key === " ") {
      this.tagslist.push(this.currentTag)
      document.getElementById("tags").innerHTML = ""
      for(var i = 0; i < this.tagslist.length; i++){
        document.getElementById("tags").innerHTML += "<span spellcheck='false' class = 'tags-span'>" + this.tagslist[i] + "</span>"
        this.currentTag = ""
      }
    }
    else if (event.key == "Backspace"){
      this.currentTag = this.currentTag.substring(0, this.currentTag.length - 1);;
    }
    else {
    this.currentTag = this.currentTag + (event.key) + "";
    }
  }

  createProject(project_name: string, project_desc: string): void{
      this.dataServiceService.createProject(project_name,project_desc, this.tagslist)
      .subscribe(response => {
        this.currentProject = response.data;
        this.currentProjectService.updateProjectInfo(this.currentProject);
      });
      this.closeBox();
    }
}
