import { Component, OnInit } from '@angular/core';
import {ProjectsService} from "../../../services/projects.service";
import {UuidService} from "../../../services/uuid.service";

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  projectName: string;
  constructor(public projectsService:ProjectsService,
              public uuid: UuidService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.projectsService.addProject({
      projectId: this.uuid.generate(),
      name: this.projectName,
      logs: []
    })
  }

}
