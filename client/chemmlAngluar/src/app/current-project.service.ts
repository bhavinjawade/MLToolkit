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

  chemMLJsonChange: Subject<any> = new Subject<any>();
  chemMLJson = {
    nodes : {

    }
  }

  constructor() { 
    this.execChange.next(this.defaultProjectInfo)
    this.chemMLJsonChange.next(this.chemMLJson);
  }

  updateProjectInfo(newProjectInfo: any) {
    this.execChange.next(newProjectInfo);
  }

  getCurrentProject(){
    return this.defaultProjectInfo;
  }

  updateCurrentChemMLJson(newJson: any) {
    this.chemMLJsonChange.next(newJson);
  }

  getCurrentChemMLJson(){
    return this.chemMLJson;
  }
}
