import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbox-component',
  templateUrl: './toolbox-component.component.html',
  styleUrls: ['./toolbox-component.component.css']
})
export class ToolboxComponentComponent implements OnInit {

  @Input() description: string;
  @Input() title: string;
  @Input() toot_type: string;
  @Input() tool: string;
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
