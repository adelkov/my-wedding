import {Component, OnInit} from '@angular/core';
import {Coordinate} from "./coordinate.model";
import {MapTypeStyle} from "@agm/core";

@Component({
  selector: 'app-map-admin',
  templateUrl: './map-admin.component.html',
  styleUrls: ['./map-admin.component.css']
})
export class MapAdminComponent {
// google maps zoom level
  zoom: number = 8;
  styles: MapTypeStyle[] = [{
    elementType: "labels.icon",
    stylers: [{
      color: "#e15875",
      gamma: 100,
      saturation: 20
    }]
  }]

  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked(event) {
    console.log(event);
    this.markers.push({
      lat: event.coords.lat,
      lng: event.coords.lng,
      label: 'new location',
      draggable: true
    });
  }

  markerDragEnd(m: Marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);

  }

  markers: Marker[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: 'Wedding chappel',
      draggable: true
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: 'Dinner',
      draggable: true
    },
    {
      lat: 51.723858,
      lng: 7.895982,
      label: 'Parking',
      draggable: true
    }
  ]

  onLocationClick(m: Marker) {

  }

  openMyInfoWindow(m: Marker) {
    console.log(m.label+'shold open up')
  }
}

interface Marker {
  lat: number;
  lng: number;
  label: string;
  draggable: boolean;
}
