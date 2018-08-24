import {Guest} from "../dashboard/cards-admin/guestlist-admin/guest.model";

export class Wedding {
  name: string;
  date: string;
  location: string;
  guests: Guest[];
  presents: Object[];

  constructor(name: string, date: string, location: string, guests: Guest[], presents: Object[]) {
    this.name = name;
    this.date = date;
    this.location = location;
    this.guests = guests;
    this.presents = presents;
  }
}
