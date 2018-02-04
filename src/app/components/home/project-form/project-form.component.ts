import {Component, Input, OnInit} from '@angular/core';
import {ProjectsService} from "../../../services/projects.service";
import {UuidService} from "../../../services/uuid.service";
import {Project} from "../../../models/Project";

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  currentId: string;
  projectName: string;
  isNew: boolean = true;

  constructor(public projectService:ProjectsService,
              public uuid: UuidService) { }

  ngOnInit() {
    this.projectService.selectedProject.subscribe(project=>{
      if (project.projectId !== null) {
        this.projectName = project.name;
        this.currentId = project.projectId;
        this.isNew = false;
      }
    })
  }

  onSubmit(){
    if (this.isNew) {
      this.projectService.addProject({
        projectId: this.uuid.generate(),
        name: this.projectName,
        logs: []
      });
    }else {
      this.projectService.updateProject(this.projectName, this.currentId)
    }
    this.clearState()
  }

  clearState(){
    this.isNew = true;
    this.currentId  = '';
    this.projectName = '';
    this.projectService.clearState();
  }
}
