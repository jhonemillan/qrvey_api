import { Project } from './../model/project';
import { Toogl } from './../model/toggl';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class TogglService {

  serviceUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getTooglsByProfile(id_profile): Observable<any> {
    return this.http.get<Toogl[]>(this.serviceUrl + `/toggl/${id_profile}/all`);
  }

  addToggl (item: Toogl): Observable<any> {
  return this.http.post(this.serviceUrl + '/toggl/new', item);
  }

  getProjects(): Observable<any> {
    return this.http.get<Project[]>(this.serviceUrl + '/project/all');
  }

}
