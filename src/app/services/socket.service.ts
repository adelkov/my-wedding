import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs/Rx';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket;

  constructor() {
    this.socket = io(environment.HOST);
  }

  // returns a subject created from an observable and an observer:
  // the observer: listens to messages being emitted from the code and emits them to server socket
  // the observable: listens to server-socket and forwards the message to its subscribers
  // as a subject it can be used via .next() to send message to server-socket
  //              it can be used via .subscribe() to get messages from server
  messagesConnect(): Rx.Subject<MessageEvent> {

    let observable = new Observable(observer => {
      this.socket.on('message', (data) => {
        observer.next(data);
      });
    });

    let observer = {
      next: (data: Object) => {
        this.socket.emit('message', JSON.stringify(data));
      },
    };

    return Rx.Subject.create(observer, observable);
  }

  feedbacksconnect(): Rx.Subject<MessageEvent> {

    let observable = new Observable(observer => {
      this.socket.on('feedback', (data) => {
        observer.next(data);
      });
    });

    let observer = {
      next: (data: Object) => {
        this.socket.emit('feedback', JSON.stringify(data));
      },
    };

    return Rx.Subject.create(observer, observable);
  }


}
