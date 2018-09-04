import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Marker} from "../marker.model";
import {MapService} from "../map.service";

@Component({
  selector: 'app-marker-info',
  templateUrl: './marker-info.component.html',
  styleUrls: ['./marker-info.component.css']
})

export class MarkerInfoComponent implements OnInit {
  @Input() marker: Marker;
  @ViewChild('newName') newName;
  formOpen = false;
  constructor(private mapService: MapService) { }

  ngOnInit() {
  }

  deleteThisMarker() {
    this.mapService.deleteMarker(this.marker);
  }

  saveName(event) {
    if (event.key === "Enter") {
      this.marker.label = this.newName.nativeElement.value;
      this.formOpen = false;
    }
  }
}
