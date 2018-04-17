import { User } from './../../model/user';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {} as User;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }


  AuthTwitter() {
    this.auth.GetLoginTwitter().subscribe((data) => {
       this.user = data;
       console.log(this.user);
    });
   }

}
