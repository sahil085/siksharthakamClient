import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/';
import {UserComponent} from '../components/user/user.component';
import {Employee} from '../employee';
import {User} from '../user';

@Injectable()
export class DataService {

  userData: any;


  constructor(public http: HttpClient) {
    console.log('serives');
  }


  getUsers(): Observable<Employee[]> {
    return this.http.get<Employee[]>('http://localhost:8828/getdetail');
  }



  public getUserDetail(data) {
    // return this.http.get<Employee[]>('http://localhost:8080/getdetail');
    return this.http.put<Employee>('http://localhost:8828/adduser',data);
  }

  saveNewUser(data)
  {
    return this.http.put<User[]>('http://localhost:8828/signup',data);
  }

}

