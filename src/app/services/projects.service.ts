import {Injectable} from '@angular/core';
import {Project} from "../models/Project";
import {of} from "rxjs/observable/of"
import {Observable} from "rxjs/Observable";
import {Log} from "../models/Log";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {AlertMessage} from "../models/AlertMessage";

@Injectable()
export class ProjectsService {

  projects: Project[];

  private showMessageSource = new BehaviorSubject<AlertMessage>({message: '', show: false});
  showMessage = this.showMessageSource.asObservable();

  private logSource = new BehaviorSubject<Log>({id: null, text: null, date: null});
  selectedLog = this.logSource.asObservable();

  setFormLog(log: Log) {
    this.logSource.next(log);
  }

  private stateSource = new BehaviorSubject<boolean>(true);
  stateClear = this.stateSource.asObservable();

  clearState() {
    this.logSource.next({id: null, text: null, date: null});
    this.projectSource.next({projectId: null, name: null, logs: null});
    this.stateSource.next(true);
  }


  private projectSource = new BehaviorSubject<Project>({projectId: null, name: null, logs: null});
  selectedProject = this.projectSource.asObservable();

  setSelectedProject(project: Project) {
    this.projectSource.next(project);
  }

  constructor() {
    this.projects = JSON.parse(localStorage.getItem('projects')) || [];
  }

  getAllProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getProject(id): Observable<Project> {
    let selectedProject: Project;

    this.projects.forEach((current) => {
      if (current.projectId === id) {
        selectedProject = current;
      }
    });
    return of(selectedProject);
  }

  addProject(project){
    this.projects.unshift(project);
    localStorage.setItem('projects', JSON.stringify(this.projects));

    //Show alert Message
    this.showMessageSource.next({message: `${project.name} successfully added`, show: true});
  }

  addLog(log: Log, projectId: string) {
    this.projects.forEach(project => {
      if (project.projectId === projectId) {
        project.logs.unshift(log);
      }
    });
    //Show alert Message
    this.showMessageSource.next({message: `Log successfully added`, show: true});

    // Add to localStorage
    localStorage.setItem('projects', JSON.stringify(this.projects));
  }


  updateLog(log: Log, projectId: string) {
    this.projects.forEach(project => {
      if (project.projectId === projectId) {
        project.logs.forEach((value, i) => {
          if (value.id === log.id) {
            //delete old log
            project.logs.splice(i, 1);
          }
        });
        project.logs.unshift(log);
      }
    });
    //Show alert Message
    this.showMessageSource.next({message: `Log successfully updated`, show: true});
  }


  updateProject(projectName: string, currentId: string) {
    this.projects.forEach((current) => {
      if (current.projectId === currentId) {
        current.name = projectName;
      }
    })
    //Show alert Message
    this.showMessageSource.next({message: `${projectName} successfully updated`, show: true});
  }

  remoteLog(logId: number, projectId:string) {
    this.projects.forEach((project) =>{
      if (project.projectId === projectId) {
        project.logs.splice(logId, 1);
      }
    })
    //Show alert Message
    this.showMessageSource.next({message: `log was successfully deleted`, show: true});
  }

  remoteProject(i: number) {
    this.projects.splice(i, 1);
    //Show alert Message
    this.showMessageSource.next({message: `Project was successfully deleted`, show: true});
  }
}
