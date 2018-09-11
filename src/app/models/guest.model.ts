export class Guest {
  id: string;
  name: string;
  rsvp: string;
  guests: number;
  imgURL: string;

  constructor(id: string, name: string, rsvp: string, guests: number, imgURL: string) {
    this.id = id;
    this.name = name;
    this.rsvp = rsvp;
    this.guests = guests;
    this.imgURL = imgURL;
  }
}
