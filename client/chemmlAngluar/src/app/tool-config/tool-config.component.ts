import { Component, OnInit, Input } from '@angular/core';
import pandasReadCSV from '../helpers/jsons/pandasReadCSV'
import chemmlDataset from '../helpers/jsons/chemmlDataset'

@Component({
  selector: 'app-tool-config',
  templateUrl: './tool-config.component.html',
  styleUrls: ['./tool-config.component.css']
})
export class ToolConfigComponent implements OnInit {
  
  @Input() show: boolean;
  @Input() tooltype: string;
  @Input() toolid: string;
  docstring: string;
  parameterList: any;
  classOutputList: any; 
  jsonToolTypeMap = {
    "csv": pandasReadCSV,
    "chemical-data": chemmlDataset
  }
  
  constructor() {
    this.show = false;
  }

  ngOnInit(): void {
    let toolConfigParamtersUi = this.jsonToolTypeMap[this.tooltype]
    console.log(toolConfigParamtersUi);
    this.docstring = toolConfigParamtersUi.node_functions[0].docstring;
    this.parameterList = toolConfigParamtersUi.node_functions[0].inputs;
    this.parameterList.forEach(element => {
      element.name = element.name.split("_").join(" ");
    });
    this.classOutputList = toolConfigParamtersUi.node_functions[0].outputs;
  }

}
