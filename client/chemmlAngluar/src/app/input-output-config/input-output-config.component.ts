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
import { CurrentProjectService } from '../current-project.service';
import chemmlWrapperProcessing from '../helpers/jsons/chemmlWrapperPreprocessingUI';
import sklearnEnsemble from '../helpers/jsons/sklearnEnsemble';

@Component({
  selector: 'app-input-output-config',
  templateUrl: './input-output-config.component.html',
  styleUrls: ['./input-output-config.component.css']
})
export class InputOutputConfigComponent implements OnInit {

  @Input() parentId: string;
  @Input() childId: string;
  @Input() public show: boolean;
  input_parameters = [];

  parentToolType: any;
  childToolType: any;
  chemMLJson: any;
  parentOutputs: any;
  childInputs: any;

  select_output_type: any;
  select_input_type: any;
  tempChemMLJson: any;

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
    'ensemble-methods':{
      json: sklearnEnsemble,
      parsing_method: 1
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
    },
    'helper-functions': {
      json: chemmlWrapperProcessing,
      parsing_method: 2,
    }
  }
  
  constructor(private currentProjectService: CurrentProjectService){
    this.select_input_type = [];
    this.currentProjectService.chemMLJsonChange.subscribe((value) => { 
      this.chemMLJson = value;
    });  
    this.chemMLJson = this.currentProjectService.getCurrentChemMLJson();
  }

  ngOnInit(): void {
    this.select_output_type = 0;
    this.parentToolType = this.parentId.split("_")[1];
    this.childToolType = this.childId.split("_")[1];

    this.jsonToolTypeMap[this.parentToolType]["json"];
  
    var parent = this.chemMLJson.nodes[this.parentId];
    var child = this.chemMLJson.nodes[this.childId];


    if(this.jsonToolTypeMap[this.parentToolType]["parsing_method"]==0) {
      var node_functions = this.jsonToolTypeMap[this.parentToolType]["json"].node_functions;
      for(var i=0;i<node_functions.length; i++){
      if(node_functions[i].name == parent.name){
          this.parentOutputs = node_functions[i].outputs;
          break;
        }
      }
    }
    
    if(this.jsonToolTypeMap[this.parentToolType]["parsing_method"]==1) {
      var nodes = this.jsonToolTypeMap[this.parentToolType]["json"].nodes;
      var node_functions: any;
      console.log(nodes);
      for(var i =0; i<nodes.length;i++){
        console.log(parent);
        if(nodes[i].name == parent.name)
        {
          node_functions = nodes[i].node_functions;
          break;
        }
      }
        console.log(node_functions);
        for(var i=0;i<node_functions.length; i++) {
          if(node_functions[i].name == parent.method.name) {
              this.parentOutputs = node_functions[i].outputs;
              break;
            }
          }    
      }

    if(this.jsonToolTypeMap[this.childToolType]["parsing_method"]==1 || this.jsonToolTypeMap[this.childToolType]["parsing_method"]==2) {
      console.log(this.jsonToolTypeMap[this.childToolType]["json"].nodes, this.jsonToolTypeMap[this.childToolType]["json"].nodes[child.name], child.name);
      var nodes = this.jsonToolTypeMap[this.childToolType]["json"].nodes;
      var node_functions: any;
      for(var i =0; i<nodes.length;i++){
        if(nodes[i].name == child.name)
        {
          node_functions = nodes[i].node_functions;
          break;
        }
      }

      for(var i=0;i<node_functions.length; i++){
      if(node_functions[i].name == child.method.name){
          this.childInputs = node_functions[i].inputs;
          break;
        }
      }
      for(var i=0;i<this.childInputs.length; i++){
        this.select_input_type.push(0);
      }
    }
    console.log(this.parentOutputs,this.childInputs);
  }

  selectOutputType(i,parameterName){
    this.select_output_type = i;
    if(parameterName == 'data'){
      parameterName = 'df';
    }
    if(this.parentToolType == 'model-selection'){
      if (this.chemMLJson.nodes[this.parentId].name == 'train_test_split'){
        this.chemMLJson.nodes[this.parentId].outputs = {
          "test1": true,
          "test2": true,
          "train1": true,
          "train2": true
        }
      }
    }
    if(this.parentToolType == 'csv' || this.parentToolType == 'chemical-data'){
      this.chemMLJson.nodes[this.parentId].outputs[parameterName]= true
      }
      if(this.parentToolType == 'csv'){
        this.chemMLJson.nodes[this.parentId].module= "";
      }
    else{
      this.chemMLJson.nodes[this.parentId].method.outputs[parameterName] = true;
    }
    console.log(this.chemMLJson);
  }

  selectInputType(i, j, childInputParameterName, value){
    this.select_input_type[i] = j;
    if(value == 'data'){
      value = 'df';
    }
    if(this.childToolType=='helper-functions'){
      childInputParameterName = 'X';
    }
    if(this.jsonToolTypeMap[this.childToolType]["parsing_method"]==1) {
      this.chemMLJson.nodes[this.childId].inputs[childInputParameterName] = '@' + this.parentId + '@' + value;
    }
    else{
      this.chemMLJson.nodes[this.childId].method.inputs[childInputParameterName] = '@' + this.parentId + '@' + value;
    }
    console.log(i,j);
    console.log(this.chemMLJson);
  }
}