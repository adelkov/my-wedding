export class Marker {
  lat: number;
  lng: number;
  label: string;
  icon: string;
  draggable: boolean;
  isOpen: boolean;
  isVisible: boolean;


  constructor(lat: number, lng: number, label: string, fontawesomeClass: string, draggable: boolean, isOpen: boolean) {
    this.isVisible = false;
    this.lat = lat;
    this.lng = lng;
    this.label = label;
    this.icon = fontawesomeClass;
    this.draggable = draggable;
    this.isOpen = isOpen;
  }
}
