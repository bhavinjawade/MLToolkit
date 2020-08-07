import { Component, OnInit, Input } from '@angular/core';
import pandasReadCSV from '../helpers/jsons/pandasReadCSV'
import chemmlDataset from '../helpers/jsons/chemmlDataset'
import sklearnSVM from '../helpers/jsons/sklearnSvm'
import sklearnLinearModel from '../helpers/jsons/sklearnLinearModel'
import kerasNNModel from '../helpers/jsons/kerasNN'
import sklearnDimentional from '../helpers/jsons/sklearnDecomposition'
import chemmlRepresent from '../helpers/jsons/chemmlRepresent'
import sklearnPreprocessing from '../helpers/jsons/sklearnPreprocessing'
import chemmlDataSplitting from '../helpers/jsons/chemmlDataSplitting'
import sklearnModelSelection from '../helpers/jsons/sklearnModelSelection'
import sklearnModelMetrics from '../helpers/jsons/sklearnMetrics'

@Component({
  selector: 'app-tool-config',
  templateUrl: './tool-config.component.html',
  styleUrls: ['./tool-config.component.css']
})
export class ToolConfigComponent implements OnInit {
  
  @Input() show: boolean;
  @Input() tooltype: string;
  @Input() tool: string;
  @Input() toolid: string;
  docstring: string;
  nodes: any;
  parameterList: any;
  select_node_type: any;
  select_method_type: any;
  classOutputList: any;
  isSelected:boolean;
  toolConfigParamtersUi: any
  class_methods:any;
  input_parameters: any;

  jsonToolTypeMap = {
    "csv": {
      "json": pandasReadCSV,
      "parsing_method": 0
    },
    "chemical-data": {
      "json": chemmlDataset,
      "parsing_method": 0
    },
    "svm-model": {
      "json": sklearnSVM,
      "parsing_method": 1
    },
    "linear-model": {
      "json": sklearnLinearModel,
      "parsing_method": 1
    },
    "nn-model": {
      "json": kerasNNModel,
      "parsing_method": 1
    },
    "dim-reduction":{
      "json": sklearnDimentional,
      "parsing_method": 1
    },
    "chemml-represent":{
      "json": chemmlRepresent,
      "parsing_method": 1
    },
    "preprocessing-node":{
      "json": sklearnPreprocessing,
      "parsing_method": 1,
    },
    "data-splitting":{
      "json": chemmlDataSplitting,
      "parsing_method": 1
    },
    "model-selection":{
      "json": sklearnModelSelection,
      "parsing_method": 1
    },
    "model-metrics":{
      "json": sklearnModelMetrics,
      "parsing_method": 1
    }
  }
  selectedNodeFunction: any;

  constructor() {
    this.show = false;
    this.select_node_type = 0;
    this.select_method_type = 0;
  }

  ngOnInit(): void {
    console.log(this.jsonToolTypeMap, this.tooltype);
    this.toolConfigParamtersUi = this.jsonToolTypeMap[this.tooltype]["json"]

    if(this.jsonToolTypeMap[this.tooltype]["parsing_method"] == 0){
      this.nodes = this.toolConfigParamtersUi.node_functions;
      this.class_methods = this.toolConfigParamtersUi.node_functions[this.select_node_type].outputs;
      this.input_parameters = this.toolConfigParamtersUi.node_functions[this.select_node_type].inputs;
    }

    else if(this.jsonToolTypeMap[this.tooltype]["parsing_method"] == 1){
      this.nodes = this.toolConfigParamtersUi.nodes;
      this.class_methods = this.toolConfigParamtersUi.nodes[this.select_node_type].node_functions
      this.input_parameters = this.toolConfigParamtersUi.nodes[this.select_node_type].inputs;
    }

    else if(this.jsonToolTypeMap[this.tooltype]["parsing_method"] == 2){
      this.nodes = this.toolConfigParamtersUi.nodes;
      this.class_methods = this.toolConfigParamtersUi.nodes[this.select_node_type].node_functions
      this.input_parameters = this.toolConfigParamtersUi.nodes[this.select_node_type].inputs;
    }
    // this.parameterList = toolConfigParamtersUi.node_functions[0].inputs;
    // this.parameterList.forEach(element => {
    //   element.name = element.name.split("_").join(" ");
    // });
    // this.classOutputList = toolConfigParamtersUi.node_functions[0].outputs;
  }

  filter_methods(){
    return this.class_methods.filter(x => x.name.charAt(0) != "_"); 
  }

  selectNodeType(i){
    this.select_node_type = i;
    if(this.jsonToolTypeMap[this.tooltype]["parsing_method"] == 0){
      this.class_methods = this.toolConfigParamtersUi.node_functions[this.select_node_type].outputs;
      this.input_parameters = this.toolConfigParamtersUi.node_functions[this.select_node_type].inputs;
    }

    else if(this.jsonToolTypeMap[this.tooltype]["parsing_method"] == 1){
      this.class_methods = this.toolConfigParamtersUi.nodes[this.select_node_type].node_functions    
      this.input_parameters = this.toolConfigParamtersUi.nodes[this.select_node_type].inputs;
      console.log(this.input_parameters);
    }  
  }

  selectClassMethod(i){
    this.select_method_type = i;
  }
}
 