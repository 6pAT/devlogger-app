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

  constructor(public projectService: ProjectsService) {
  }

  ngOnInit() {

  }

}
