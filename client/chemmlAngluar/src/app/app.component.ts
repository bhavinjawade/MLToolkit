import { Component, HostListener, AfterViewInit, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver, ElementRef, Renderer2 } from '@angular/core';

import { ToolConfigComponent } from './tool-config/tool-config.component';

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
          console.log(toolConfigComponent.instance.show);
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
    console.log("Snapping", this);
    block.classList.add("blockintree");
    
    if(!(block.id in this.toolConfigMapping)){
    
      let componentFactory = this.CFR.resolveComponentFactory(ToolConfigComponent);
      this.componentRef = this.target.createComponent(componentFactory)
      block.id += "_" + this.globalCounter
      this.globalCounter += 1;
      this.toolConfigMapping[block.id] = this.componentRef;
      var children = block.childNodes;
      for (var i = 0; i < children.length; i++) {
        children[i].id = block.id;
      }
    }
    return true;
  }

  onButtonClicked(event) {
    console.log(event); // handle button clicked here.
  }
}
