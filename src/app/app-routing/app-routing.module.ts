import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

//Component
import { HomeComponent} from "../components/home/home.component"
import { ProjectComponent } from "../components/project/project.component"
import { AboutComponent } from "../components/about/about.component"
import { NotFoundComponent } from "../components/not-found/not-found.component"

const ROUTES: Routes = [
  {path: '', component: HomeComponent },
  {path: 'project/:id', component: ProjectComponent },
  {path: 'about', component: AboutComponent },
  {path: '**', component: NotFoundComponent }
]
@NgModule({
  imports: [ RouterModule.forRoot(ROUTES)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
