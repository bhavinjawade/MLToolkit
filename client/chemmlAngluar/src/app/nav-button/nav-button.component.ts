import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class NavButtonComponent implements OnInit {
  @Input() group: FormGroup;
  @Input() type: string;
  @Input() description: string;
  @Input() class: string;
  @Input() data: string;
  @Output() callFunction = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  onClick(event) {
    this.callFunction.emit(event);
  }
}
