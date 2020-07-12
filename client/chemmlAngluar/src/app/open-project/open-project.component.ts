import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-open-project',
  templateUrl: './open-project.component.html',
  styleUrls: ['./open-project.component.css']
})
export class OpenProjectComponent implements OnInit {

  @Output() closeBoxEmit: EventEmitter<any> = new EventEmitter<any>();
  closeBox(): void{
    this.closeBoxEmit.emit()
  }

  constructor() { }

  ngOnInit(): void {
  }

}
