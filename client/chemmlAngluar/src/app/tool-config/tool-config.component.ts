import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-config',
  templateUrl: './tool-config.component.html',
  styleUrls: ['./tool-config.component.css']
})
export class ToolConfigComponent implements OnInit {

  constructor() { 
    console.log("toolconfig created");
  }

  ngOnInit(): void {
  }

}
