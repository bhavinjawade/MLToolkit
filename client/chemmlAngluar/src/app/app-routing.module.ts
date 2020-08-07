import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppComponent } from './app.component';

const routes: Routes = [  
  // { path: '/home', component: LandingPageComponent },  
  // { path: '/project/:id', component: AppComponent },    
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
