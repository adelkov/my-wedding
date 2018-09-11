import { Injectable } from '@angular/core';
import {Marker} from "../models/marker.model";
import {Subject} from "rxjs/Subject";

@Injectable({
  providedIn: 'root'
})
export class MapService {
  onMarkersUpdate = new Subject<Marker[]>();
  markers = [
    new Marker( 51.673858, 7.815982, 'Wedding chappel', true, false),
    new Marker( 51.673858, 7.815982, 'Dinner', true, false),
    new Marker( 51.673858, 7.815982, 'Parking', true, false)
  ];

  constructor() { }

  getMarkers() :Marker[] {
    // http get markers
    return this.markers.slice();
  }

  saveMarkers(markers: Marker[]) {
    // http post markers
    // fire subject to update markers view
    this.onMarkersUpdate.next(this.markers)
  }

  deleteMarker(marker: Marker) {
    let index = this.markers.indexOf(marker, 0);
    if (index > -1) {
      this.markers.splice(index, 1);
    }
    this.saveMarkers(this.markers);
  }
}
