import {Component, OnInit, ViewChild} from '@angular/core';
import {Coordinate} from "./coordinate.model";
import {MapTypeStyle} from "@agm/core";
import {Marker} from "./marker.model";
import {MapService} from "./map.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-map-admin',
  templateUrl: './map-admin.component.html',
  styleUrls: ['./map-admin.component.css']
})
export class MapAdminComponent {
// google maps zoom level
  markers: Marker[];
  markersUpdate: Subscription;
  latCenterView: number = 51.673858;
  lngCenterView: number = 7.815982;
  zoom: number = 8;

  constructor(private mapService: MapService) {
    this.markers = this.mapService.getMarkers();
    this.markersUpdate = this.mapService.onMarkersUpdate.subscribe((markers) => this.markers = markers)
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked(event) {
    let marker = new Marker(event.coords.lat, event.coords.lng, 'new location', true, true)
    this.markers.push(marker);
    for (let m of this.markers){
      m.isOpen = m.label === marker.label;
    }
    this.mapService.saveMarkers(this.markers);
  }

  markerDragEnd(m: Marker, $event: MouseEvent) {
    this.mapService.saveMarkers(this.markers);
  }

  onLocationClick(m: Marker) {
    this.latCenterView = m.lat;
    this.lngCenterView = m.lng;
    for (let marker of this.markers){
      marker.isOpen = marker.label === m.label;
    }
  }
}


