export class Marker {
  lat: Number;
  lng: Number;
  isOpen: boolean;

  constructor(lat: Number, lng: Number) {
    this.lat = lat;
    this.lng = lng;
    this.isOpen = true;
  }
}

