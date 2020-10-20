import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit {

  selectedToolSet: string;
  is_toolbox_show = 0;
  
  constructor() { 
    this.selectedToolSet = "Data"
  }

  toolbox_show(){
    if(this.is_toolbox_show == 0){
      document.getElementById("leftcard").style.left = "-18%";
      this.is_toolbox_show = 180;
      document.getElementById("close_img").style.transform = "rotate(" + this.is_toolbox_show + "deg)";
      console.log(document.getElementById("close_img").style.transform, "rotate(" + this.is_toolbox_show + "deg);");
    }
    else{
      document.getElementById("leftcard").style.left = "0%";
      this.is_toolbox_show = 0;
      document.getElementById("close_img").style.transform = "rotate(" + this.is_toolbox_show + "deg)";
    }
  }

  scrollSubNavLeft(){
    (<HTMLElement>document.getElementById("subnav")).scrollLeft -= 50;
  }

  scrollSubNavRight(){
    (<HTMLElement>document.getElementById("subnav")).scrollLeft += 50;
  }

  ngOnInit(): void {
  }

}
