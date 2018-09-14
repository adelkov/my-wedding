import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import {SocketService} from "./socket.service";

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  messages: Subject<any>;

  constructor(private wsService: SocketService) {
    this.messages = <Subject<any>>wsService
      .connect()
      .map((response: any): any => {
        return response;
      })
  }

  sendMsg(msg) {
    this.messages.next(msg);
  }

}
