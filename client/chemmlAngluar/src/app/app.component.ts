import { Component, HostListener, AfterViewInit, ViewChild, ViewContainerRef, 
        ComponentRef, ComponentFactoryResolver, ElementRef, Renderer2 } 
        from '@angular/core';

import { ToolConfigComponent } from './tool-config/tool-config.component';

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

  @ViewChild('appenHere', {static : false, read : ViewContainerRef}) target: ViewContainerRef;
  private componentRef: ComponentRef<any>;


  constructor(private elementRef:ElementRef, private CFR: ComponentFactoryResolver){
    this.globalCounter = 0;
  }

  
  ngAfterViewInit() {

    this.elementRef.nativeElement.addEventListener('click', (evt) => {
      let id = evt.target.id
      let isTool = false
      if(id.substring(0,4) == 'tool'){
        isTool = true
        console.log(evt.target);
        if(id in this.toolConfigMapping){
          let toolConfigComponent = this.toolConfigMapping[id];
          toolConfigComponent.instance.show = true;
          console.log("Opening Tool-config of block: ", toolConfigComponent.instance.type);
        }
      }
    });
    flowy(document.getElementById("canvas"), this.drag, this.release, this.snapping);
  }

  drag(block){
    console.log("DRAG", block);
  }
  
  release(){
    console.log("RELEASE")
  }

  snapping = (block,first,parent) => {
    console.log("Snapping", block);
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
    return true;
  }

  openProject(event) {
    console.log(event); // handle button clicked here.
    this.openProjectBox = true;
  }

  newProject(event){
    console.log(event);
    this.showNewProjectBox = true;
    console.log("Calling URL: ", API_URLS.newProject);
  }
}
