export class Marker {
  lat: Number;
  lng: Number;
  name: String;
  icon: String;
  isOpen: boolean;
  id: string;

  constructor(lat: Number, lng: Number) {
    this.lat = lat;
    this.lng = lng;
    this.isOpen = true;
    this.name = "";
    this.icon = "";
  }
}

