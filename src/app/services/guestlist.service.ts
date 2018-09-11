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
      {id: '1', name: 'Julika', rsvp: 'Yes', guests: 2, imgURL: ''},
      {id: '2', name: 'Béla Haa', rsvp: 'No', guests: 5, imgURL: ''},
      {id: '3', name: 'Nyuszika', rsvp: 'Maybe', guests: 1, imgURL: ''},
      {id: '4', name: 'József', rsvp: 'Yes', guests: 1, imgURL: ''},
      {id: '4', name: 'Judit', rsvp: 'Yes', guests: 12, imgURL: ''},
      {id: '4', name: 'ALma', rsvp: 'Yes', guests: 1, imgURL: ''},
      {id: '4', name: 'Tibor', rsvp: 'Yes', guests: 1, imgURL: ''},
      {id: '4', name: 'József', rsvp: 'Yes', guests: 1, imgURL: ''},
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
