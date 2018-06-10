import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Userregister} from '../../userregister.model';
import {Observable} from 'rxjs';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/internal/operators';
import 'rxjs/add/operator/catch';
import {Employee} from '../../employee';
import {DataService} from '../../services/data.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Component({
  selector: 'app-userregistraion',
  templateUrl: './userregistraion.component.html',
  styleUrls: ['./userregistraion.component.css']
})

export class UserregistraionComponent implements OnInit {
   public userreg : Userregister[] = [];
   public userform:FormGroup;


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  constructor(private breakpointObserver: BreakpointObserver,
              private formBuilder: FormBuilder,
              private http: HttpClient,
              private service:DataService) {

}

  ngOnInit() {
    this.userform = this.formBuilder.group({
      username: [],
      description: [],
      roundschant: [],
      date : []
  });
  }

  save(){
console.log(this.userform.value);

this.service.getUserDetail(this.userform.value).subscribe();
  }



}
