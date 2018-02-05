import {Component, OnInit} from '@angular/core';
import {ProjectsService} from "../../services/projects.service";

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.css']
})
export class AlertMessageComponent implements OnInit {

  alertMessage: string;
  success: boolean;
  show: boolean;

  constructor(public projectService: ProjectsService) {
  }

  ngOnInit() {

    this.projectService.showMessage.subscribe(alertMessage => {
      this.alertMessage = alertMessage.message;
      this.success = true;
      this.show = alertMessage.show;

      setTimeout(() => {
        this.show = false;
      }, 2000);

    }, error2 => {
      this.alertMessage = error2;
      this.success = false;
      this.show = true;

      setTimeout(() => {
        this.show = false;
      }, 2000);
    })
  }


}
