import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Location} from '@angular/common'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  @Output() changeRouteEmit: EventEmitter<any> = new EventEmitter<any>();
  changeRoute(): void{
    this.changeRouteEmit.emit()
  }
  
  constructor(private location: Location, private router: Router) { }

  ngOnInit(): void {

  }

  openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  sendToPortal() {
    this.location.replaceState("/portal");
    this.router.navigate(['/portal']);
    this.changeRoute();
  }
}
