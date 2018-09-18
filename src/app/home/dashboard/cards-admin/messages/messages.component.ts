import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {ChatService} from "../../../../services/chat.service";
import {GuestlistService} from "../../../../services/guestlist.service";
import {SocketService} from "../../../../services/socket.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  onlineUsers: Observable<Object[]>;

  constructor(private socketService: SocketService) {
    this.onlineUsers = this.socketService.onlineUserConnect();
  }

}
