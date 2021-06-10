import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import pandasReadCSV from '../helpers/jsons/pandasReadCSV';
import chemmlDataset from '../helpers/jsons/chemmlDataset';
import sklearnSVM from '../helpers/jsons/sklearnSvm';
import sklearnLinearModel from '../helpers/jsons/sklearnLinearModel';
import kerasNNModel from '../helpers/jsons/kerasNN';
import sklearnDimentional from '../helpers/jsons/sklearnDecomposition';
import chemmlRepresent from '../helpers/jsons/chemmlRepresent';
import sklearnPreprocessing from '../helpers/jsons/sklearnPreprocessing';
import chemmlDataSplitting from '../helpers/jsons/chemmlDataSplitting';
import sklearnModelSelection from '../helpers/jsons/sklearnModelSelection';
import sklearnModelMetrics from '../helpers/jsons/sklearnMetrics';
import sklearnEnsemble from '../helpers/jsons/sklearnEnsemble';
import chemmlWrapperProcessing from '../helpers/jsons/chemmlWrapperPreprocessingUI';
import { CurrentProjectService } from '../current-project.service';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-tool-config',
  templateUrl: './tool-config.component.html',
  styleUrls: ['./tool-config.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ToolConfigComponent implements OnInit {
  @Input() show: boolean;
  @Input() tooltype: string;
  @Input() tool: string;
  @Input() toolid: string;
  @Input() project_name: string;
  docstring: string;
  nodes: any;
  parameterList: any;
  select_node_type: any;
  select_method_type: any;
  classOutputList: any;
  selected_file: any;
  isSelected: boolean;
  toolConfigParamtersUi: any;
  class_methods: any;
  select_file = -1; 
  input_parameters: any;
  @Input() currentProject: any;
  projectFiles: any;
  image_extensions = ['png','jpg','jpeg','svg']
  document_extensions = ['pdf','csv','txt','tsv']
  imageFiles = [];
  documentFiles = [];
  csvFiles = []
  show_visualize = false;
  
  chemMLJson: any;

  jsonToolTypeMap = {
    'csv': {
      json: pandasReadCSV,
      parsing_method: 0,
    },
    'chemical-data': {
      json: chemmlDataset,
      parsing_method: 0,
    },
    'svm-model': {
      json: sklearnSVM,
      parsing_method: 1,
    },
    'linear-model': {
      json: sklearnLinearModel,
      parsing_method: 1,
    },
    'nn-model': {
      json: kerasNNModel,
      parsing_method: 1,
    },
    'ensemble-methods':{
      json: sklearnEnsemble,
      parsing_method: 1
    },
    'dim-reduction': {
      json: sklearnDimentional,
      parsing_method: 1,
    },
    'chemml-represent': {
      json: chemmlRepresent,
      parsing_method: 1,
    },
    'preprocessing-node': {
      json: sklearnPreprocessing,
      parsing_method: 1,
    },
    'data-splitting': {
      json: chemmlDataSplitting,
      parsing_method: 1,
    },
    'model-selection': {
      json: sklearnModelSelection,
      parsing_method: 1,
    },
    'model-metrics': {
      json: sklearnModelMetrics,
      parsing_method: 1,
    },
    'helper-functions': {
      json: chemmlWrapperProcessing,
      parsing_method: 1,
    }
  };

  nodeJson = {
    inputs: {
    },
    library: '',
    method: {
      inputs: {
        },
        name: '',
        outputs: {
        }
    },
    module: '',
    name: '',
    outputs: {
    },
  };

  selectedNodeFunction: any;

  constructor(private currentProjectService: CurrentProjectService, private dataServiceService: DataServiceService){
      this.currentProjectService.chemMLJsonChange.subscribe((value) => { 
        this.chemMLJson = value;
      });  
      this.chemMLJson = this.currentProjectService.getCurrentChemMLJson();

    this.show = false;
    this.select_node_type = 0;
    this.select_method_type = 0;

  
  }

  ngOnInit(): void {
    console.log(this.project_name);
    console.log(this.jsonToolTypeMap, this.tooltype);
    this.toolConfigParamtersUi = this.jsonToolTypeMap[this.tooltype]['json'];

    if (this.jsonToolTypeMap[this.tooltype]['parsing_method'] == 0) {
      this.nodes = this.toolConfigParamtersUi.node_functions;
      this.class_methods = this.toolConfigParamtersUi.node_functions[
        this.select_node_type
      ].outputs;
      this.input_parameters = this.toolConfigParamtersUi.node_functions[
        this.select_node_type
      ].inputs;
      if(this.tooltype == "csv"){
        console.log("THIS TOOLTYPE",this.tooltype, this.project_name);
        this.dataServiceService.getProjectFilesWithDetails(this.project_name).subscribe(project_files => {
          this.projectFiles = project_files["data"];
          for(var i in this.projectFiles){
            console.log(this.projectFiles[i].file_name.split(".").pop())
            if(this.image_extensions.indexOf(this.projectFiles[i].file_name.split(".").pop()) > -1 ){
              this.imageFiles.push(this.projectFiles[i]);
            }
            else if(this.projectFiles[i].file_name.split(".").pop() == 'csv'){
              this.csvFiles.push(this.projectFiles[i])
            }
            if(this.document_extensions.indexOf(this.projectFiles[i].file_name.split(".").pop()) > -1 ){
              this.documentFiles.push(this.projectFiles[i]);
            }
          }
          console.log(project_files);
        });
      }
    } else if (this.jsonToolTypeMap[this.tooltype]['parsing_method'] == 1) {
      this.nodes = this.toolConfigParamtersUi.nodes;
      this.class_methods = this.toolConfigParamtersUi.nodes[
        this.select_node_type
      ].node_functions;
      this.input_parameters = this.toolConfigParamtersUi.nodes[
        this.select_node_type
      ].inputs;
    } else if (this.jsonToolTypeMap[this.tooltype]['parsing_method'] == 2) {
      this.nodes = this.toolConfigParamtersUi.nodes;
      this.class_methods = this.toolConfigParamtersUi.nodes[
        this.select_node_type
      ].node_functions;
      this.input_parameters = this.toolConfigParamtersUi.nodes[
        this.select_node_type
      ].inputs;
    }
    // this.parameterList = toolConfigParamtersUi.node_functions[0].inputs;
    // this.parameterList.forEach(element => {
    //   element.name = element.name.split("_").join(" ");
    // });
    // this.classOutputList = toolConfigParamtersUi.node_functions[0].outputs;

    this.selectNodeType(0,this.nodes[0].name);
    this.selectClassMethod(0,this.filter_methods()[0].name);
    this.nodeJson.library =  this.toolConfigParamtersUi.library;  
    this.nodeJson.module =  this.toolConfigParamtersUi.module;  
  }

  selectFileType(parameterName, file, file_index){
    //document.getElementById("csv_load").setAttribute("value",file.file_path);
    this.select_file = file_index;
    this.selected_file = file;
    this.nodeJson.inputs[parameterName] = file.file_path;
  }

  filter_methods() {
    return this.class_methods.filter((x) => x.name.charAt(0) != '_');
  }

  selectNodeType(i, nodeType) {
    this.select_node_type = i;
    this.nodeJson.name = nodeType;
    console.log(this.nodeJson);
    if (this.jsonToolTypeMap[this.tooltype]['parsing_method'] == 0) {
      this.class_methods = this.toolConfigParamtersUi.node_functions[
        this.select_node_type
      ].outputs;
      this.input_parameters = this.toolConfigParamtersUi.node_functions[
        this.select_node_type
      ].inputs;
    } else if (this.jsonToolTypeMap[this.tooltype]['parsing_method'] == 1) {
      this.class_methods = this.toolConfigParamtersUi.nodes[
        this.select_node_type
      ].node_functions;
      this.input_parameters = this.toolConfigParamtersUi.nodes[
        this.select_node_type
      ].inputs;
      console.log(this.input_parameters);
    }
  }

  selectClassMethod(i,className) {
    this.select_method_type = i;
    this.nodeJson.method.name = className;
    console.log(this.nodeJson);
  }

  getParameterValue(event, parameterName) {
    this.nodeJson.inputs[parameterName] = event.target.value;
    console.log(this.nodeJson);    
  }

  saveConfig(){
    this.show = false;
    var finalConfig = {};
    finalConfig[this.toolid] = this.nodeJson;
    var tool_element = document.getElementById(this.toolid);
    var tool_info = (<HTMLElement>tool_element).getElementsByClassName("tool_config_info")[0];
    var nodeType = this.nodeJson["name"];
    var method = this.nodeJson["method"]["name"];
    if(method=="write"){
      if(nodeType == "SaveCSV"){
        this.nodeJson["inputs"]["file_path"] = "./metric/" + this.nodeJson["inputs"]["file_path"] + ".csv"
      }
      if(nodeType == "SaveFile"){
        this.nodeJson["inputs"]["file_path"] = "./metric/" + this.nodeJson["inputs"]["file_path"] + ".txt"
      }
    }
    var keys = Object.keys(this.nodeJson["inputs"]);
    
    (<HTMLElement>tool_info).innerHTML += `<div class = "_row"><span class = "info_key"> Method </span> <span class = "info_value">` + method + `</span></div>`;
    
    for (var i = 0; i < keys.length; i++) {
      var value = this.nodeJson["inputs"][keys[i]];
      if(keys[i] == "filepath_or_buffer"){
        value = value.split("\\")[value.split("\\").length - 1];
      }
      (<HTMLElement>tool_info).innerHTML += `<div class = "_row"><span class = "info_key">` + keys[i] + `</span> <span class = "info_value">` + value + `</span></div>`;
    }
    
    (<HTMLElement>tool_element).getElementsByClassName("blocktitle")[0].innerHTML = nodeType;
    
    (<HTMLElement>tool_info).style.display = "block";
    console.log("FINAL CONFIG FOR NODE: ", this.toolid, finalConfig);
    console.log("Current Json", JSON.stringify(this.chemMLJson));
    this.chemMLJson.nodes[this.toolid] = this.nodeJson;
  }
  
  visualizeOutput(){
    this.show = false;
    this.show_visualize = true;
  }

}