import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentProjectService {

  execChange: Subject<any> = new Subject<any>();
  defaultProjectInfo = {
    "project_name" : "Default ChemML Project"
  };
  constructor() { 
    this.execChange.next(this.defaultProjectInfo)
  }

  updateProjectInfo(newProjectInfo: any) {
    this.execChange.next(newProjectInfo);
  }

  getCurrentProject(){
    return this.defaultProjectInfo;
  }
}
