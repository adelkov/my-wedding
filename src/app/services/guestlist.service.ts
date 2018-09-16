import {Injectable} from '@angular/core';
import {Guest} from "../models/guest.model";
import {Subject} from "rxjs/Subject";

@Injectable()
export class GuestlistService {

  guestChosen = new Subject();
  private guests: Guest[];
  public guestDisplayed = false;

  constructor() {
    this.guests = [
     new Guest("e@mail.hu", "Juli", 2),
     new Guest("e@fsd.hu", "Béla", 1),
     new Guest("fdasf@mail.hu", "Géza", 0),
     new Guest("e@fdsfsdf.hu", "Rozi", 2)
    ]
  }

  addGuest(guest: Guest) {
    // todo
  }

  editGuest(guest: Guest) {
    // todo
  }

  getGuests() {
    this.guests.forEach(function (guest: Guest) {
      guest.imgURL = 'https://robohash.org/' + guest.name;
    });
    return this.guests.slice();
  }

}
