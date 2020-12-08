import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  login_sccess = false;
  showLoginMessage = false;
  login_message = "";
  @Output() closeBoxEmit: EventEmitter<any> = new EventEmitter<any>();
  closeLoginPage(): void{
    this.closeBoxEmit.emit()
  }
  
  constructor(private dataServiceService: DataServiceService, private cdRef:ChangeDetectorRef) { }
  ngOnInit(): void {
    if(localStorage.getItem("access_token") != null && localStorage.getItem("logged_in")){
      this.login_sccess = true;
      this.closeLoginPage();
    }
  }

  login(username:string, password: string){
    this.dataServiceService.login(username,password).subscribe(res => {
      console.log(res);
      if(res.status.success){
        this.login_sccess = true;
        this.closeLoginPage();
        this.cdRef.detectChanges();
      }
      else if(res.status.status_code == 401){
        this.login_message = "Incorrect Username or Password";
        this.showLoginMessage = true;
        this.cdRef.detectChanges();
      }
      else if(res.status.status_code == 402){
        console.log(res.status.status_code);
        this.login_message = "User does not exists. Please contact Bhavin Jawade.";
        this.showLoginMessage = true;
        this.cdRef.detectChanges();
      }
    });
  }
  
  

}
