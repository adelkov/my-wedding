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
  markerSchemas= [
    { label: "Chappel", icon: "fas fa-church" },
    { label: "Dinner", icon: "fas fa-utensils" },
    { label: "Party", icon: "fas fa-music" },
    { label: "Parking", icon: "fas fa-parking" },
    ];

  constructor(private mapService: MapService) {

  }

  ngOnInit() {
    this.formOpen = this.marker.name === "";
  }

  deleteThisMarker() {
    this.mapService.deleteMarker(this.marker);
  }

  chosenSchema(markerSchema: { label: string; icon: string }) {
    this.marker.name = markerSchema.label;
    this.marker.icon = markerSchema.icon;
    this.mapService.updateMarker(this.marker);
    this.formOpen = false;
  }
}
