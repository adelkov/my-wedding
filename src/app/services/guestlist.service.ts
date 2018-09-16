import {Injectable} from '@angular/core';
import {Guest} from "../models/guest.model";
import {Subject} from "rxjs/Subject";

@Injectable()
export class GuestlistService {

  guestChosen = new Subject();
  private guests: Guest[];
  public guestDisplayed = false;

  constructor() {

  }

  addGuest(guest: Guest) {
    // todo
  }

  editGuest(guest: Guest) {
    // todo
  }

  getGuests() {
    // todo
  }

  inviteGuest(guest: Guest) {

  }

}
