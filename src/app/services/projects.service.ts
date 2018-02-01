import { Injectable } from '@angular/core';
import {Project} from "../models/Project";
import { of } from "rxjs/observable/of"
import {Observable} from "rxjs/Observable";
import {Log} from "../models/Log";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class ProjectsService {

  projects: Project[];
  selectedProject: Project;

  private logSource = new BehaviorSubject<Log>({id: null, text: null, date: null});
  selectedLog = this.logSource.asObservable();

  private stateSource = new BehaviorSubject<boolean>(true);
  stateClear = this.stateSource.asObservable();


  constructor() {
    this.projects =JSON.parse(localStorage.getItem('projects')) || [];
  }

  getAllProjects(): Observable<Project[]>{
    return of(this.projects);
  }

  getProject(id): Observable<Project>{
    this.projects.forEach((current, i)=>{
      if (current.projectId === id) {
        this.selectedProject = current;
      }
    });
    return of(this.selectedProject);
  }

  addProject(project){
    this.projects.unshift(project);
    localStorage.setItem('projects', JSON.stringify(this.projects));
  }

  addLog(log: Log, projectId: string){
    this.projects.forEach(project=>{
      if (project.projectId === projectId) {
        project.logs.unshift(log);
      }
    });

    // Add to localStorage
    localStorage.setItem('projects', JSON.stringify(this.projects));
  }


  updateLog(log:Log, projectId: string){
    this.projects.forEach(project=>{
      if (project.projectId === projectId) {
        project.logs.forEach( (value, i) =>{
          if (value.id === log.id) {
            //delete old log
            project.logs.splice(i, 1);
          }
        });
        project.logs.unshift(log);
      }
    });
  }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }

  clearState() {
    this.logSource.next({id: null, text: null, date: null});
    this.stateSource.next(true);
  }
}
