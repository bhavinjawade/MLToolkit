import { Component, HostListener, AfterViewInit, ViewChild, ViewContainerRef, 
        ComponentRef, ComponentFactoryResolver, ElementRef, Renderer2 } 
        from '@angular/core';
import { CurrentProjectService } from './current-project.service';
import { ToolConfigComponent } from './tool-config/tool-config.component';
import { InputOutputConfigComponent } from './input-output-config/input-output-config.component'
import { API_URLS } from './helpers/api_urls';

declare var flowy: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {
  render: any;
  title = 'chemmlAngluar';
  globalCounter: any;
  toolConfigMapping = [];
  showNewProjectBox = false;
  openProjectBox = false;
  currentProject: any;
  projectName: any;
  showLandingPage = true;
  inputOutputConfigMapping = [];

  @ViewChild('appenHere', {static : false, read : ViewContainerRef}) target: ViewContainerRef;
  private componentRef: ComponentRef<any>;

  @ViewChild('inputOutputAppend', {static : false, read : ViewContainerRef}) inputOutputTarget: ViewContainerRef;
  private inputOutputComponentRef: ComponentRef<any>;


  constructor(private elementRef:ElementRef, private CFR: ComponentFactoryResolver,
              private currentProjectService: CurrentProjectService){
    this.globalCounter = 0;
    this.currentProjectService.execChange.subscribe((value) => { 
      this.currentProject = value;
      this.projectName = this.currentProject.project_name;
    });  
    this.currentProject = this.currentProjectService.getCurrentProject();
    this.projectName = this.currentProject["project_name"];
  }

  
  ngAfterViewInit() {

    this.elementRef.nativeElement.addEventListener('click', (evt) => {
      let id = evt.target.id
      let isTool = false
      if(id.substring(0,4) == 'tool'){
        isTool = true
        console.log(evt.target);
        console.log(id,this.toolConfigMapping);
        if(id in this.toolConfigMapping){
          let toolConfigComponent = this.toolConfigMapping[id];
          toolConfigComponent.instance.show = true;
          console.log("Opening Tool-config of block: ", toolConfigComponent.instance.type);
        }
      }
    });
    flowy(document.getElementById("canvas"), this.drag, this.release, this.arrowClicking, this.snapping, this.rearrange);

    // flowy constructor parameters: canvas, grab, release, snapping, rearrange, spacing_x, spacing_y
  }

  reRender() {
    this.elementRef.nativeElement.addEventListener('click', (evt) => {
      let id = evt.target.id
      let isTool = false
      if(id.substring(0,4) == 'tool'){
        isTool = true
        console.log(evt.target);
        console.log(id,this.toolConfigMapping);
        if(id in this.toolConfigMapping){
          let toolConfigComponent = this.toolConfigMapping[id];
          toolConfigComponent.instance.show = true;
          console.log("Opening Tool-config of block: ", toolConfigComponent.instance.type);
        }
      }
    });
    flowy(document.getElementById("canvas"), this.drag, this.release, this.arrowClicking, this.snapping);
  }

  arrowClicking = (child, parent) => {
    if(child in this.inputOutputConfigMapping){
      if(parent in this.inputOutputConfigMapping[child]){
        var inputOutputConfigComponent = this.inputOutputConfigMapping[child][parent];
        inputOutputConfigComponent.instance.show = true;
        // console.log('arrow'+'_'+parent + "~" + child);
        // document.getElementById('arrow'+'_'+parent + "~" + child).classList.add('arrow_svg_hover_class');
      }
      else{
        let componentFactory = this.CFR.resolveComponentFactory(InputOutputConfigComponent);
        this.inputOutputComponentRef = this.inputOutputTarget.createComponent(componentFactory);
        this.inputOutputConfigMapping[child][parent] =  this.inputOutputComponentRef;     
        var inputOutputConfigComponent = this.inputOutputConfigMapping[child][parent];
        inputOutputConfigComponent.instance.show = true;
        // console.log('arrow'+'_'+parent + "~" + child);
        // document.getElementById('arrow'+'_'+parent + "~" + child).classList.add('arrow_svg_hover_class');
      }
    }
    else {
      let componentFactory = this.CFR.resolveComponentFactory(InputOutputConfigComponent);
      this.inputOutputComponentRef = this.inputOutputTarget.createComponent(componentFactory);
      this.inputOutputConfigMapping[child] = [];
      this.inputOutputConfigMapping[child][parent] =  this.inputOutputComponentRef;
      var inputOutputConfigComponent = this.inputOutputConfigMapping[child][parent];
      this.inputOutputComponentRef.instance.parentId = parent;
      this.inputOutputComponentRef.instance.childId = child;
      console.log(this.inputOutputConfigMapping);
    }
  }

  drag(block){
    console.log("DRAG", block);
  }
  
  release = () => {
    console.log("RELEASE")
  }

  rearrange = () => {
    return true;
  }

  snapping = (block,first,parent) => {
    console.log("Snapping", block, first, parent);
    block.classList.add("blockintree");
    
    if(!(block.id in this.toolConfigMapping)){
    
      let componentFactory = this.CFR.resolveComponentFactory(ToolConfigComponent);
      this.componentRef = this.target.createComponent(componentFactory)
      block.id += "_" + this.globalCounter
      this.globalCounter += 1;
      this.toolConfigMapping[block.id] = this.componentRef;
      this.componentRef.instance.toolid = block.id;

      let type = block.id.split("_");
      type = type[type.length-2];
      console.log(type);
      this.componentRef.instance.tooltype = type;
      var children = block.childNodes;
      for (var i = 0; i < children.length; i++) {
        children[i].id = block.id;
      }
    }

    if(!first){
    var child_id = block.id;
    var parent_id = parent.id;
    console.log(block);
    console.log(parent);
  }

    return true;
  }

  openProject(event) {
    console.log(event); // handle button clicked here.
    this.openProjectBox = true;
  }

  goHome(event){
    console.log(event);
  }

  newProject(event){
    console.log(event);
    this.showNewProjectBox = true;
    console.log("Calling URL: ", API_URLS.newProject);
  }
}
