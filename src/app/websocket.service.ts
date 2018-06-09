import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { map, catchError } from 'rxjs/operators';
import * as socketIo from 'socket.io-client';


@Injectable()
export class WebsocketService {
  private socket: SocketIOClient.Socket;

  constructor() {
    this.socket = io('http://localhost:3000');
  }

  // EMITTER
  sendMessage(msg: string) {
    this.socket.emit('sendMessage', { message: msg });
  }

  // HANDLER
  onNewMessage() {
    return Observable.create(observer => {
      this.socket.on('newMessage', msg => {
        observer.next(msg);
      });
    });
  }
}
