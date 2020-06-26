import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tool-config',
  templateUrl: './tool-config.component.html',
  styleUrls: ['./tool-config.component.css']
})
export class ToolConfigComponent implements OnInit {
  @Input() show: boolean;
  constructor() {
    this.show = false;
    console.log("toolconfig created");
  }

  ngOnInit(): void {
  }

}
