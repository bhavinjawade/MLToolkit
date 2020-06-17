import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chemmlAngluar';
  onButtonClicked(event) {
    console.log(event); // handle button clicked here.
   }
}
