import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ConfigService }  from '../config/config.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-project-box',
  templateUrl: './new-project-box.component.html',
  styleUrls: ['./new-project-box.component.css']
})
export class NewProjectBoxComponent implements OnInit {

  @Output() closeBoxEmit: EventEmitter<any> = new EventEmitter<any>();
  closeBox(): void{
    this.closeBoxEmit.emit()
  }

  config: any;
  constructor() { 
  }

  ngOnInit(): void {
  }

  createProject(): void{
  }
}
