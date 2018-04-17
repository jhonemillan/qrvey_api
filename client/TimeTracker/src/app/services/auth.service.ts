import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { User } from '../model/user';

@Injectable()
export class AuthService {

  domain = 'http://127.0.0.1:3000';

  constructor(private http: HttpClient) { }


  GetLoginTwitter(): Observable<User> {
    return this.http.get<User>(this.domain + '/auth/twitter');
  }


}
