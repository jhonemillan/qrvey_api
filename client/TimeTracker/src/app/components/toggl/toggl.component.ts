import { Project } from './../../model/project';
import { Observable } from 'rxjs/Observable';
import { Toogl } from './../../model/toggl';
import { AuthService } from './../../services/auth.service';
import { TogglService } from './../../services/toggl.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { timer } from 'rxjs/observable/timer';


@Component({
  selector: 'app-toggl',
  templateUrl: './toggl.component.html',
  styleUrls: ['./toggl.component.css']
})
export class TogglComponent implements OnInit {
  profile: string;
  timer;
  toggl = {} as Toogl;
  toggls: Toogl[];
  projects: Project[];
  ticks = 0;
  minutesDisplay = 0;
  hoursDisplay = 0;
  secondsDisplay = 0;
  canSave = false;

  source = timer(0, 1000);
  sub: Subscription;


  constructor(public auth: AuthService, public data: TogglService) { }

  ngOnInit() {
    this.timer = '00:00:00';
    this.getAllToogls();
    this.getAllProjects();
    this.canSave = false;
  }

  timeStart() {
    this.startTimer();
    this.canSave = false;
  }

  timeStop() {
    this.sub.unsubscribe();
    this.canSave = true;
  }

  private startTimer() {
    this.sub = this.source.subscribe(time => {
              this.toggl.segundos = this.getSeconds(time);
            this.toggl.minutos = this.getMinutes(time);
            this.toggl.horas = this.getHours(time);

    });
}

private getSeconds(ticks: number) {
  return this.pad(ticks % 60);
}

private getMinutes(ticks: number) {
   return this.pad((Math.floor(ticks / 60)) % 60);
}

private getHours(ticks: number) {
  return this.pad(Math.floor((ticks / 60) / 60));
}

private pad(digit: any) {
  return digit <= 9 ? '0' + digit : digit;
}

  saveToggl() {
    this.data.addToggl(this.toggl).subscribe((res) => {console.log(res); });
    this.getAllToogls();
    this.clear();

  }

  clear() {
    this.toggl.task = '';
    this.toggl.horas = null;
    this.toggl.minutos = null;
    this.toggl.segundos = null;
  }

  getAllToogls() {
    this.auth.getProfile((err, profile) => {
      this.profile = profile;
      this.toggl.id_profile = this.profile.sub.toString().split('|')[1];

      this.data.getTooglsByProfile(this.toggl.id_profile).subscribe((data) => {
        this.toggls = data.toggls;
        console.log(data);
        console.log(this.toggls);
      });
    });
  }

  getAllProjects() {
    this.data.getProjects().subscribe((data) => {
      this.projects = data.projects;
      console.log(this.projects);
    });
  }

}
