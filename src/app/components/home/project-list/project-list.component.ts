import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../../../models/Project";
import {ProjectsService} from "../../../services/projects.service";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  @Input() projects: Project[];
  selectProject: Project;

  constructor(private projectService: ProjectsService) {
  }

  ngOnInit() {
    this.projectService.stateClear.subscribe(clearState => {
      if (clearState) {
        this.selectProject = {
          projectId: '',
          name: '',
          logs: null
        }
      }
    })
  }

  onSelect(project: Project) {
    this.selectProject = project;
  }

  remoteProject(i: number) {
    this.projectService.remoteProject(i);
  }

  editProject(project: Project) {
    this.projectService.setSelectedProject(project);
  }
}
