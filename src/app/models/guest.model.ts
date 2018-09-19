export class Guest {
  id: string;
  toEmail: string;
  name: string;
  rsvp: string;
  guests: number;
  imgURL: string;
  online: boolean;


  constructor(email: string, name: string, guests: number) {
    this.toEmail = email;
    this.name = name;
    this.guests = guests;
    this.online = false;
    this.rsvp = "pending";
  }
}
