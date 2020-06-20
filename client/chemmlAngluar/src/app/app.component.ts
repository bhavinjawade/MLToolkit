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
  globalCounter = 0;
  toolConfigMapping = [];

  @ViewChild('appenHere', {static : false, read : ViewContainerRef}) target: ViewContainerRef;
  private componentRef: ComponentRef<any>;


  constructor(private elementRef:ElementRef, private CFR: ComponentFactoryResolver){
  }

  
  ngAfterViewInit() {

    this.elementRef.nativeElement.addEventListener('click', (evt) => {
      console.log(evt);
      evt.srcElement.id = evt.srcElement.id + this.globalCounter;
      this.globalCounter += 1;
      let componentFactory = this.CFR.resolveComponentFactory(ToolConfigComponent);
      this.componentRef = this.target.createComponent(componentFactory)
      this.toolConfigMapping.push({
        key: evt.srcElement.id,
        value: this.componentRef
      })
      console.log(this.toolConfigMapping);
    });
      
    flowy(document.getElementById("canvas"), this.drag, this.release, this.snapping);
  }



  drag(block){
    console.log("DRAG", block);
  }
  
  release(){
    console.log("RELEASE")
  }

  snapping(block,first,parent){
    block.classList.add("blockintree");
    console.log("SNAP", block);
    return true;
  }

  onButtonClicked(event) {
    console.log(event); // handle button clicked here.
  }
}
