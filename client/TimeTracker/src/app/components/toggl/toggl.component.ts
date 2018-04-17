import { Observable } from 'rxjs/Observable';
import { Toogl } from './../../model/toggl';
import { AuthService } from './../../services/auth.service';
import { TogglService } from './../../services/toggl.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggl',
  templateUrl: './toggl.component.html',
  styleUrls: ['./toggl.component.css']
})
export class TogglComponent implements OnInit {
  profile: string;
  timer;
  toggl = {} as Toogl;
  toggls : Toogl[];

  constructor(public auth: AuthService, public data: TogglService) { }

  ngOnInit() {    
    this.timer = "00:00:00";
    this.getAllToogls();
  }

  timeStart(){

  }

  timeStop(){

  }

  saveToggl(){
    this.toggl.task = 'test';
    this.toggl.horas = 0;
    this.toggl.minutos = 0;
    this.toggl.segundos = 0;

    this.data.addToggl(this.toggl).subscribe((res)=>{console.log(res)});
    this.getAllToogls();

  }

  getAllToogls(){
    this.auth.getProfile((err, profile) => {
      this.profile = profile;
      this.toggl.id_profile = this.profile.sub.toString().split("|")[1];

      this.data.getTooglsByProfile(this.toggl.id_profile).subscribe((data)=>{
        this.toggls = data.toggls;
        console.log(data);
        console.log(this.toggls);
      })
    });
  }

}
