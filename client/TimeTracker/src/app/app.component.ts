import { User } from './model/user';
import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user = {} as User;

  constructor(private auth: AuthService) { 
    auth.handleAuthentication();
  }
}
