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

@NgModule({
  declarations: [
    AppComponent,
    NavButtonComponent,
    ToolboxComponent,
    ToolboxComponentComponent,
    ToolConfigComponent,
    NewProjectBoxComponent,
    OpenProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
