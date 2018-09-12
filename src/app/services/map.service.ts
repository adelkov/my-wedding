import {Injectable} from '@angular/core';
import {Marker} from "../models/marker.model";
import {Subject} from "rxjs/Subject";

@Injectable({
  providedIn: 'root'
})
export class MapService {
  onMarkersUpdate = new Subject<Marker[]>();
  markerSchema = [
    {label: "Church", icon: "fas fa-church"},
    {label: "Dinner", icon: "fas fa-utensils"},
    {label: "Party", icon: "fas fa-music"},
    {label: "Parking", icon: "fas fa-parking"}
  ];
  markers: Marker[];
  allowCreation : boolean;

  constructor() {
    this.markers = this.getMarkers() ? this.getMarkers() : [];
    this.allowCreation = true;
  }

  updateMarker(marker: Marker) {
  }

  addMarker(marker: Marker) {
    marker.isOpen = false;
    this.markers.push(marker);
    this.saveMarkers();
  }

  deleteMarker(marker: Marker) {
    let index = this.markers.indexOf(marker, 0);
    if (index > -1) {
      this.markers.splice(index, 1);
    }
    this.saveMarkers();
  }

  saveMarkers() {
    localStorage.setItem('markers', JSON.stringify(this.markers));
    this.onMarkersUpdate.next(this.markers);
  }

  getMarkers() {
    return JSON.parse(localStorage.getItem('markers'));
  }

  udpateMarker(marker: Marker) {
    this.markers
  }
}
