import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CurrentProjectService } from '../current-project.service';
import { DataServiceService } from '../data-service.service';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-left-files-bar-component',
  templateUrl: './left-files-bar-component.component.html',
  styleUrls: ['./left-files-bar-component.component.css']
})
export class LeftFilesBarComponentComponent implements OnInit {

  @Input() show: boolean;
  @Output() emitter: EventEmitter<boolean> = new EventEmitter();
  filesToUpload: FileList;
  @Input() currentProject: any;
  projectName: string;
  fileUploadProgress: any;
  projectFiles: any;
  imageFiles = [];
  documentFiles = [];
  image_extensions = ['png','jpg','jpeg','svg']
  document_extensions = ['pdf','csv','txt','tsv']
  constructor(private currentProjectService: CurrentProjectService, private dataServiceService: DataServiceService) { 
  }

  ngOnInit(): void {
    this.dataServiceService.getProjectFiles(this.currentProject.project_name).subscribe(project_files => {
      this.projectFiles = project_files["data"];
      for(var i in this.projectFiles){
        console.log(this.projectFiles[i].split(".").pop())
        if(this.image_extensions.indexOf(this.projectFiles[i].split(".").pop()) > -1 ){
          this.imageFiles.push(this.projectFiles[i]);
        }
        else{
          this.documentFiles.push(this.projectFiles[i]);
        }
      }
      console.log(project_files);
    });
  }

  closeMenu(){
    this.emitter.emit(this.show);
  }

  selectFiles(){
    document.getElementById("file-input").click();
  }

  UploadFiles(files: FileList) {
      console.log(files,this.currentProject.project_name);
      this.filesToUpload = files;
      for(var i = 0; i < this.filesToUpload.length; i++){
        console.log("Files Upload: ", this.filesToUpload[i]);
        this.dataServiceService.postFile(this.filesToUpload[i],this.currentProject.project_name).subscribe(event => {
          if (event.type === HttpEventType.UploadProgress) {
            this.fileUploadProgress = Math.round(100 * event.loaded / event.total);
            console.log(this.fileUploadProgress);
          }
          this.reRenderMenu();   
        });
      }
  }

  reRenderMenu(){
    this.imageFiles = [];
    this.documentFiles = [];
    this.dataServiceService.getProjectFiles(this.currentProject.project_name).subscribe(project_files => {
      this.projectFiles = project_files["data"];
      for(var i in this.projectFiles){
        console.log(this.projectFiles[i].split(".").pop())
        if(this.image_extensions.indexOf(this.projectFiles[i].split(".").pop()) > -1 ){
          this.imageFiles.push(this.projectFiles[i]);
        }
        else{
          this.documentFiles.push(this.projectFiles[i]);
        }
      }
      console.log(project_files);
    });
  }
}
