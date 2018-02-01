import {Component, Input, OnInit} from '@angular/core';
import {ProjectsService} from "../../../services/projects.service";
import {Log} from "../../../models/Log";

@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.css']
})
export class LogListComponent implements OnInit {

  @Input() logs: Log[];
  @Input() currentRouteId: string;
  selectedLog: Log;

  constructor(public projectService: ProjectsService) {
  }

  ngOnInit() {
    // this.projectService.selectedLog.subscribe(log => {
    //   if (log.id === null) {
    //     this.selectedLog = {
    //       id: '',
    //       text: '',
    //       date: ''
    //     }
    //   }
    // })
    this.projectService.stateClear.subscribe(clearState => {
      if (clearState) {
        this.selectedLog = {
          id: '',
          text: '',
          date: ''
        }
      }
    })
  }

  onSelect(log: Log) {
    this.projectService.setFormLog(log);
    this.selectedLog = log;
  }
}
