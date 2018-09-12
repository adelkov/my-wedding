import {Component, OnInit, ViewChild} from '@angular/core';
import {Coordinate} from "./coordinate.model";
import {MapTypeStyle} from "@agm/core";
import {Marker} from "../../../../models/marker.model";
import {MapService} from "../../../../services/map.service";
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

  mapClicked(event) {
    let marker = new Marker(event.coords.lat, event.coords.lng, 'new location', true, true)
    this.mapService.addMarker(marker);
  }

  markerDragEnd(m: Marker, event: any) {
    m.lat =  event.coords.lat;
    m.lng =  event.coords.lng;
    this.mapService.updateMarker(m);
  }

  onLocationClick(m: Marker) {
    this.latCenterView = m.lat;
    this.lngCenterView = m.lng;
    for (let marker of this.markers){
      marker.isOpen = marker.label === m.label;
    }
  }
}


