import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private dataServiceService: DataServiceService) { }

  ngOnInit(): void {
  }

  login(username:string, password: string){
    console.log(username, password);
    this.dataServiceService.login(username,password).subscribe(res => {console.log(res)});
  }
  
  

}
