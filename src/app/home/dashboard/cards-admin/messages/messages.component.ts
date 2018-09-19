import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {ChatService} from "../../../../services/chat.service";
import {GuestlistService} from "../../../../services/guestlist.service";
import {SocketService} from "../../../../services/socket.service";
import {AuthService} from "../../../../auth/auth.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit, OnDestroy{

  onlineUsers: Observable<Object[]>;
  authSub: Subscription;

  constructor(
    private socketService: SocketService,
    private authService: AuthService
    ) {
  }

  ngOnInit() {
    this.authSub = this.authService.authReady.subscribe(
      ()=> {
        this.onlineUsers = this.socketService.onlineUserConnect();
      }
    )
  }

  ngOnDestroy() {
    this.authSub.unsubscribe();
  }
}
