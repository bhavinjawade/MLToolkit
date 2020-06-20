import { Component, AfterViewInit } from '@angular/core';
declare var flowy: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'chemmlAngluar';
  
  constructor(){
  }
  ngAfterViewInit(): void {
    flowy(document.getElementById("canvas"), drag, release, snapping);
    function drag(block){
      console.log(block);
    }
    function release(){

    }
    function snapping(block,first,parent){
      // block.classList.remove("blockelem");
      block.classList.add("blockintree");
      console.log(block);
      return true;
    }
  }

  onButtonClicked(event) {
    console.log(event); // handle button clicked here.
  }
}
