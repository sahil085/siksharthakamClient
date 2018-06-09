import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as Stomp from 'stompjs';
import * as  SockJS from 'sockjs-client';
import * as $ from 'jquery';
import {Observable} from 'rxjs/Rx';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';
import {type} from 'os';
import {Subscription} from 'rxjs';
import {isNullOrUndefined} from 'util';
import {DataService} from './services/data.service';
import {User} from './user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private serverUrl = 'http://localhost:8080/socket';
  private title = 'WebSockets chat';
  private stompClient;
  public message: string;
  public isTyping = false;
  public tmsg: string;
  public timer ;
  public userform:FormGroup;
  public usr: User[] = [];

  ngOnInit() {
    this.userform = this.formBuilder.group({
      userName: [],
      password: []
    });
  }

  constructor(  private formBuilder: FormBuilder,
                private usersignupservice: DataService) {
    // this.initializeWebSocketConnection();
  }
  createuser() {
    console.log(this.userform.value);
    this.usersignupservice.saveNewUser(this.userform.value).subscribe( user =>
      this.usr = user
    );
  }

  initializeWebSocketConnection() {
    let ws = new SockJS('http://localhost:8828/socket');
    this.stompClient = Stomp.over(ws);
    let that = this;
    this.stompClient.connect({}, function (frame) {
      that.stompClient.subscribe('/chat/muskan', (message) => {
        if (message.body) {
          $('.chat').append('<div class=\'message\'>' + message.body + '</div>');
          console.log(message.body);
        }
      });
      that.stompClient.subscribe('/chat/sahil', (message) => {

        if (message.body) {
          $('.chat').append('<div class=\'message\'>' + message.body + '</div>');
          console.log(message.body);
        }
      });

      that.stompClient.subscribe('/chat/typing/sahil/muskan', (message) => {
// alert("radhe radhe");
        if (message.body) {
          this.tmsg =  message.body;
          $('.typing').html('');
          $('.typing').html('<div class=\'message\'>' + message.body + '</div>');

          console.log(message.body+ '---------');
        }
      });
      that.stompClient.subscribe('/chat/typing/sahil/sahil', (message) => {
// alert("radhe radhe");
        if (message.body) {
          this.tmsg =  message.body;
          $('.typing').html('');
          $('.typing').html('<div class=\'message\'>' + message.body + '</div>');

          console.log(message.body+ '---------');
        }
      });


      that.stompClient.subscribe('/chat/typing/sahil', (message) => {
        if (message.body) {
          let parsed = JSON.parse(message.body);
          this.tmsg = parsed.username + '  is typing';
          // this.typingNotifi = parsed.username + 'is typing';
          // // $('.chat').append('<div class=\'message\'>' + message.body + '</div>');
          // console.log(message.body);
        }
      });

    });
  }


  stopTyping(user) {
    this.isTyping = false;
    console.log(this.isTyping);
    this.timer.unsubscribe();
    this.timer=undefined;
    // this.stompClient.send('/chat/' + user, {}, this.isTyping);
  }

  startTyping(user) {
    this.isTyping = true;
    console.log('typing ' + user);
    this.stompClient.send('/app/typing/sahil/' + user, {}, null);
    if (this.timer == undefined){
      this.timer = Observable.interval(1200).subscribe(x => {
        this.stopTyping(user);
      });
    }

  }


  sendMess() {
    this.tmsg = 'sahil';

    this.stompClient.send('/app/send/message/sahil', {}, this.message);
    $('#input').val('');
  }

  sendMessage() {

    this.tmsg = 'muskan';
    this.stompClient.send('/app/send/message/muskan', {}, this.message);
    $('#input').val('');
  }



}
