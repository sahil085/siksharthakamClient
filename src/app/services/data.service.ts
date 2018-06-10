import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/';
import {UserComponent} from '../components/user/user.component';
import {Employee} from '../employee';
import {User} from '../user';

import { environment } from '../../environments/environment';

@Injectable()
export class DataService {

  userData: any;
  apiUrl: string = environment.apiUrl;


  constructor(public http: HttpClient) {
    console.log('serives');
  }


  getUsers(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl + '/getdetail');
  }



  public getUserDetail(data) {
    // return this.http.get<Employee[]>('http://localhost:8080/getdetail');
    return this.http.put<Employee>(this.apiUrl + '/adduser', data);
  }

  saveNewUser(data) {
    return this.http.put<User[]>(this.apiUrl + '/account/register', data);
  }

}

