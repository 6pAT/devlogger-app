import {Component, Input, OnInit} from '@angular/core';
import {ProjectsService} from "../../../services/projects.service";
import {UuidService} from "../../../services/uuid.service";

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  @Input() currentRouteId:string;

  id: string;
  text: string;
  date: string;

  isNew: boolean = true;

  constructor(public projectServices: ProjectsService,
              public uuid:UuidService) { }

  ngOnInit() {
    //подписываемся на выбор log
    this.projectServices.selectedLog.subscribe( log => {
      console.log(log);
      if (log.id !== null) {
        this.id  = log.id;
        this.text = log.text;
        this.date = log.date;
        this.isNew = false;
      }
    })
  }

  onSubmit(){
    if (this.isNew) {
      const newLog = {
        id: this.uuid.generate(),
        text: this.text,
        date: new Date()
      };
      this.projectServices.addLog(newLog, this.currentRouteId);
    }else {

      const updateLog = {
        id: this.id,
        text: this.text,
        date: this.date
      };
      this.projectServices.updateLog(updateLog, this.currentRouteId);
    }
    this.clearState();
  }

  clearState(){
    this.isNew = true;
    this.id  = '';
    this.text = '';
    this.date = '';
    this.projectServices.clearState();
  }

}
