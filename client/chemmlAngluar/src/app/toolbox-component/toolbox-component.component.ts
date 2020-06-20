import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
declare var flowy;

@Component({
  selector: 'app-toolbox-component',
  templateUrl: './toolbox-component.component.html',
  styleUrls: ['./toolbox-component.component.css']
})

export class ToolboxComponentComponent {

  @Input() description: string;
  @Input() title: string;
  @Input() toot_type: string;
  @Input() tool: string;
  
  constructor() { }
}
