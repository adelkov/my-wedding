import {Component, OnInit, ViewChild} from '@angular/core';
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
    this.markers = this.mapService.getMarkers() ? this.mapService.getMarkers() : [];
    this.mapService.allowCreation = !(this.markers.length === 4);
    this.markersUpdate = this.mapService.onMarkersUpdate.subscribe((markers) => this.markers = markers)
  }

  mapClicked(event) {
    if (!this.mapService.allowCreation) return;
    let marker = new Marker(event.coords.lat, event.coords.lng, '', '', true, true);
    marker.isVisible = true;
    this.markers.push(marker);
  }

  markerDragEnd(m: Marker, event: any) {
    m.lat = event.coords.lat;
    m.lng = event.coords.lng;
    this.mapService.updateMarker(m);
  }
}
