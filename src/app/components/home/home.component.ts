import {Component, OnInit} from '@angular/core';
//Models
import {Project} from "../../models/Project";
//Services
import {ProjectsService} from "../../services/projects.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projects: Project[];

  constructor(public projectServices: ProjectsService) {
  }

  ngOnInit() {
    this.projectServices.getAllProjects().subscribe(projects => {
      this.projects = projects;
    }, error2 => {
      console.log(error2);
    });
  }

}
