import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectComponent } from './components/project/project.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ProjectFormComponent } from './components/home/project-form/project-form.component';
import { ProjectListComponent } from './components/home/project-list/project-list.component';
import { LogFormComponent } from './components/project/log-form/log-form.component';
import { LogListComponent } from './components/project/log-list/log-list.component';


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
    LogListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
