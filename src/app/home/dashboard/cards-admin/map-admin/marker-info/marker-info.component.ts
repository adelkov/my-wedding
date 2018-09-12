import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Marker} from "../../../../../models/marker.model";
import {MapService} from "../../../../../services/map.service";

@Component({
  selector: 'app-marker-info',
  templateUrl: './marker-info.component.html',
  styleUrls: ['./marker-info.component.css']
})

export class MarkerInfoComponent implements OnInit {
  @Input() marker: Marker;
  formOpen: boolean;
  markerSchemas: { label: string, icon: string }[];

  constructor(private mapService: MapService) {
    this.formOpen = true;
  }

  ngOnInit() {
    this.markerSchemas = this.mapService.markerSchema;
  }

  deleteThisMarker() {
    this.mapService.deleteMarker(this.marker);
  }

  chosenSchema(marker: { label: string; icon: string }) {
    this.marker.label = marker.label;
    this.marker.icon = marker.icon;
    this.formOpen = false;
    let index = this.markerSchemas.indexOf(marker);
    this.markerSchemas.splice(index, 1);
    this.mapService.addMarker(this.marker);
    if (this.markerSchemas.length === 0) this.mapService.allowCreation = false;
    console.log(this.mapService.allowCreation)
  }
}
