import {Component, OnInit, ViewChild} from '@angular/core';
import {Subscription} from "rxjs";
import {ChatService} from "../../../../services/chat.service";
import {GuestlistService} from "../../../../services/guestlist.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  guests;

  constructor(private guestService: GuestlistService) {
    this.guests = this.guestService.getGuests();
  }


}
