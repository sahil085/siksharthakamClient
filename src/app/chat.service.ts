// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import * as io from 'socket.io-client';
// import {Subject} from 'rxjs';
//
// const CHAT_URL = 'ws://localhost:8828/socket';
//
// export interface Message {
//   author: string;
//   message: string;
// }
//
// @Injectable()
// export class ChatService {
//   public messages: Subject<Message>;
//
//   private socket: SocketIOClient.Socket;
//
//   constructor() {
//     this.socket = io('http://localhost:8828/socket');
//   }
//
//   // EMITTER
//   sendMessage(msg: string) {
//     this.socket.emit('sendMessage', {message: msg});
//   }
//
//   // HANDLER
//   onNewMessage() {
//     return Observable.create(observer => {
//       this.socket.on('newMessage', msg => {
//         observer.next(msg);
//       });
//     });
//   }
// }
