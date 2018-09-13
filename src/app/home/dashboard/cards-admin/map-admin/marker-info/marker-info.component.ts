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
  }

  deleteThisMarker() {
    this.mapService.deleteMarker(this.marker);
  }

  chosenSchema(marker: { label: string; icon: string }) {
  }
}
