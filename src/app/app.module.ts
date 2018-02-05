import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

//App componenets
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjectFormComponent } from './components/home/project-form/project-form.component';
import { ProjectListComponent } from './components/home/project-list/project-list.component';
import { LogFormComponent } from './components/project/log-form/log-form.component';
import { LogListComponent } from './components/project/log-list/log-list.component';

//App routing
import { AppRoutingModule } from './app-routing/app-routing.module';

//Services
import {ProjectsService} from "./services/projects.service";
import {UuidService} from "./services/uuid.service";
import { AlertMessageComponent } from './components/alert-message/alert-message.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    NavbarComponent,
    ProjectComponent,
    ProjectFormComponent,
    ProjectListComponent,
    LogFormComponent,
    LogListComponent,
    AlertMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProjectsService, UuidService],
  bootstrap: [AppComponent]
})
export class AppModule { }
