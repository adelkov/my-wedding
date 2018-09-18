import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs/Observable';
import * as Rx from 'rxjs/Rx';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket;

  constructor() {
    this.socket = io(environment.HOST + "?name=Adel&wedding=teszt");
  }

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

  onlineUserConnect(): Rx.Observable<any> {

    let observable = new Observable(observer => {
      this.socket.on('online-users', (data) => {
        observer.next(data);
      });
    });

    return observable;
  }


  joinRoom(wedding: String) {
    this.socket.emit('room', wedding)
  }
}
