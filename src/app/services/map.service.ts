import {Injectable} from '@angular/core';
import {Marker} from "../models/marker.model";
import {Subject} from "rxjs/Subject";

@Injectable({
  providedIn: 'root'
})
export class MapService {
  onMarkersUpdate = new Subject<Marker[]>();
  markers: Marker[];

  constructor() {
    this.markers = this.getMarkers();
  }

  updateMarker(marker: Marker) {

  }

  addMarker(marker: Marker) {
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
}
