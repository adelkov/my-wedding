import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ChatService} from "../../../../../services/chat.service";

@Component({
  selector: 'app-chat-flow',
  templateUrl: './chat-flow.component.html',
  styleUrls: ['./chat-flow.component.css']
})
export class ChatFlowComponent implements OnInit {
  messageSub: Subscription;
  feedbackSub: Subscription;
  messages = [];
  myName = "Adél";
  feedback = "";

  constructor(
    private chatService: ChatService
  ) {
  }

  ngOnInit() {
    this.messageSub = this.chatService.messages.subscribe(
      (message) => {
        this.feedback = "";
        this.messages.push(JSON.parse(message));
      }
    );

    this.feedbackSub = this.chatService.feedbacks.subscribe(
      (feedback) => {
        this.feedback = feedback + " is typing...";
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

  sendFeedback() {
    this.chatService.feedbacks.next(this.myName)
  }
}
