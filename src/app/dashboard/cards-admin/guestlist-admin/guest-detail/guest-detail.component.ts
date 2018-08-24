import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";
import {GuestlistService} from "../guestlist.service";

@Component({
  selector: 'app-guest-detail',
  templateUrl: './guest-detail.component.html',
  styleUrls: ['./guest-detail.component.css']
})
export class GuestDetailComponent implements OnInit, OnDestroy {
  private showMe = false;
  private eventsSubscription: Subscription;
  private currentGuest = {
    name: 'test',
    rsvp: 'test',
    guests: 2,
    imgURL: ''
  };

  constructor(private guestService: GuestlistService) {
  }

  ngOnInit() {
    this.eventsSubscription = this.guestService.guestChosen.subscribe((guest) => this.updateGuest(guest))
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe()
  }

  updateGuest(guest) {
    this.showMe = true;
    this.currentGuest = {
      name: guest.name,
      rsvp: guest.rsvp,
      guests: guest.guests,
      imgURL: guest.imgURL
    }
  }

}
