// import { Component, OnInit } from '@angular/core';
// import {ChatService} from '../chat.service';
//
// @Component({
//   selector: 'app-chat',
//   templateUrl: './chat.component.html',
//   styleUrls: ['./chat.component.css']
// })
// export class ChatComponent implements OnInit {
//   get msgInput(): string {
//     return this._msgInput;
//   }
//
//   set msgInput(value: string) {
//     this._msgInput = value;
//   }
//
//   private _msgInput = 'lorem ipsum';
//
//   constructor(
//     private chatService: ChatService,
//   ) { }
//
//   ngOnInit() {
//     this.chatService.onNewMessage().subscribe(msg => {
//       console.log('got a msg: ' + msg);
//     });
//   }
//
//   sendButtonClick() {
//     this.chatService.sendMessage(this._msgInput);
//   }
//
// }
