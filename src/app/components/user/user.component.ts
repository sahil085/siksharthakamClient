import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

import {any} from 'codelyzer/util/function';
import {Observable} from 'rxjs';
import {Employee} from '../../employee';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name = true;
  userDetails: any;
  empl: Employee[] = [];


  constructor(private dataservice: DataService) {
  }


  ngOnInit() {
    this.name = false;
    this.dataservice.getUsers().subscribe(employee => this.empl = employee);

  }

  getUser() {
    // this.dataservice.getUserDetail().subscribe(emp =>
    //   console.log(emp));
  }

}



