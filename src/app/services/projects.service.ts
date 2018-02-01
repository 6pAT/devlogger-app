import { Injectable } from '@angular/core';
import {Project} from "../models/Project";

@Injectable()
export class ProjectsService {

  projects: Project[];
  selectedProject: Project;

  constructor() {
    this.projects = [
      {
        projectId: '1',
        name: 'Easycode',
        logs: [
          {
            id: '1',
            text: 'Added componenet',
            date: '20.01.2018 15:23:12'
          },
          {
            id: '2',
            text: 'Added services',
            date: '20.01.2018 15:35:12'
          }
        ]
      },
      {
        projectId: '200',
        name: 'Amazon',
        logs: [
          {
            id: '1',
            text: 'Added http',
            date: '20.01.2018 15:23:12'
          }
        ]
      }
    ]
  }

  getAllProject(){
    return this.projects;
  }

  getProject(id){
    this.projects.forEach((current, i)=>{
      if (current.projectId === id) {
        this.selectedProject = current;
      }
    });
    return this.selectedProject;
  }

  addProject(project){
    console.log(project);
    this.projects.unshift(project);
  }


}
