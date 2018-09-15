import {Component, OnInit, ViewChild} from '@angular/core';
import {Subscription} from "rxjs";
import {ChatService} from "../../../../services/chat.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messageSub: Subscription;

  constructor(
    private chatService: ChatService
  ) {
  }

  ngOnInit() {
    this.messageSub = this.chatService.messages.subscribe(
      (message) => {
        document.getElementById("output").innerHTML += `<p>${message}</p> <hr>`;
        console.log(message)
      }
    )
  }

  sendMessage(event) {
    this.chatService.messages.next(event.target.value);
    event.target.value = "";
  }
}
