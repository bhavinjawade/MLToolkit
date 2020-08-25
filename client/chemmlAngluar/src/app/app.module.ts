import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavButtonComponent } from './nav-button/nav-button.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { ToolboxComponentComponent } from './toolbox-component/toolbox-component.component';
import { ToolConfigComponent } from './tool-config/tool-config.component';
import { NewProjectBoxComponent } from './new-project-box/new-project-box.component';
import { HttpClientModule } from '@angular/common/http';
import { OpenProjectComponent } from './open-project/open-project.component';
import { TimePipePipe } from './time-pipe.pipe';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GlobalFooterComponent } from './global-footer/global-footer.component';
import { LeftMenuComponentComponent } from './left-menu-component/left-menu-component.component';
import { InputOutputConfigComponent } from './input-output-config/input-output-config.component';
import { LeftFilesBarComponentComponent } from './left-files-bar-component/left-files-bar-component.component';
import { HomePageComponent } from './home-page/home-page.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavButtonComponent,
    ToolboxComponent,
    ToolboxComponentComponent,
    ToolConfigComponent,
    NewProjectBoxComponent,
    OpenProjectComponent,
    TimePipePipe,
    LandingPageComponent,
    GlobalFooterComponent,
    LeftMenuComponentComponent,
    InputOutputConfigComponent,
    LeftFilesBarComponentComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule//,
//    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
