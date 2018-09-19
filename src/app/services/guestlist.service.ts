import {Injectable} from '@angular/core';
import {Guest} from "../models/guest.model";
import {Subject} from "rxjs/Subject";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class GuestlistService {
  weddingName = ""; // todo
  guestChosen = new Subject();
  private guests: Guest[];
  public guestDisplayed = false;

  constructor(
    private http: HttpClient
  ) {
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
      guest.imgURL = 'https://robohash.org/' + guest.toName;
    });
    return this.guests.slice();
  }

  inviteGuest(guest: Guest) {
    this.http.post(environment.HOST + "/api/invite/" + this.weddingName, guest)
      .subscribe(
        (resp) => {
          // todo: update guestlist
        }
      )
  }
}
