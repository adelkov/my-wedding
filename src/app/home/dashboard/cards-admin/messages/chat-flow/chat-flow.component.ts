import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ChatService} from "../../../../../services/chat.service";

@Component({
  selector: 'app-chat-flow',
  templateUrl: './chat-flow.component.html',
  styleUrls: ['./chat-flow.component.css']
})
export class ChatFlowComponent implements OnInit {
  messageSub: Subscription;
  messages = [];
  myName = "Adél";

  constructor(
    private chatService: ChatService
  ) {
  }

  ngOnInit() {
    this.messageSub = this.chatService.messages.subscribe(
      (message) => {
        this.messages.push(JSON.parse(message));
      }
    )
  }

  sendMessage(event) {
    this.chatService.messages.next({
      message: event.target.value,
      name: this.myName
    });
    event.target.value = "";
  }
}
