import { Component, OnInit } from '@angular/core';
import {Project} from "../../../models/Project";
import {ProjectsService} from "../../../services/projects.service";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: Project[];

  constructor(public projectServices:ProjectsService) { }

  ngOnInit() {
    this.projects = this.projectServices.getAllProject();
  }

}
