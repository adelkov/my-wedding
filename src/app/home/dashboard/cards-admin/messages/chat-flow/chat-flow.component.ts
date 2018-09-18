import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ChatService} from "../../../../../services/chat.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-chat-flow',
  templateUrl: './chat-flow.component.html',
  styleUrls: ['./chat-flow.component.css']
})
export class ChatFlowComponent implements OnInit {
  messageSub: Subscription;
  feedbackSub: Subscription;
  paramsSub: Subscription;
  messages = [];
  myName = "Adél";
  feedback = "";
  weddingName = "teszt wedding"; // todo

  constructor(
    private chatService: ChatService,
    private route: ActivatedRoute
  ) {
    this.paramsSub = this.route.params.subscribe(
      (params: Params) => {
        this.weddingName = params.weddingName;
        this.chatService.joinRoom(this.weddingName);
      }
    );
  }

  ngOnInit() {
    this.messageSub = this.chatService.messages.subscribe(
      (message) => {
        let messageObj = JSON.parse(message);
        if (messageObj.wedding === this.weddingName) {
          this.feedback = "";
          this.messages.push(messageObj);
        }
      }
    );

    this.feedbackSub = this.chatService.feedbacks.subscribe(
      (feedback) => {
        let messageObj = JSON.parse(feedback);
        if (messageObj.wedding === this.weddingName) {
          this.feedback = messageObj.name + " is typing...";
        }
      }
    )
  }

  sendMessage(event) {
    this.chatService.messages.next({
      message: event.target.value,
      name: this.myName,
      wedding: this.weddingName
    });
    event.target.value = "";
  }

  sendFeedback() {
    this.chatService.feedbacks.next({
      name: this.myName,
      wedding: this.weddingName
    })
  }
}
