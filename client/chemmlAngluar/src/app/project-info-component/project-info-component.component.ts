import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-project-info-component',
  templateUrl: './project-info-component.component.html',
  styleUrls: ['./project-info-component.component.css']
})
export class ProjectInfoComponentComponent implements OnInit {

  @Output() closeBoxEmit: EventEmitter<any> = new EventEmitter<any>();
  closeBox(): void{
    this.closeBoxEmit.emit()
  }

  constructor() { }

  ngOnInit(): void {
  }

}
