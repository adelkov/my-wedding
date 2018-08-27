import {Component, OnInit} from '@angular/core';
import {Coordinate} from "./coordinate.model";

@Component({
  selector: 'app-map-admin',
  templateUrl: './map-admin.component.html',
  styleUrls: ['./map-admin.component.css']
})
export class MapAdminComponent implements OnInit {
  public lat: Number = 24.799448;
  public lng: Number = 120.979021;

  public origin: {};
  public destination: {};
  newLocationIsInEditing = false;
  weddingLocations = [
    'weddingChapel',
    'dinner',
    'party'
  ]
  weddingLocationsCoordinates = {
    'weddingChapel': new Coordinate(47.497912, 19.040235),
    'dinner': new Coordinate(47.497912, 19.040235),
    'party': new Coordinate(47.497912, 19.040235),
  };
  initialCoordinates = {
    latitude: 47.497912,
    longitude: 19.040235
  };

  constructor() {
  }

  ngOnInit() {
    this.origin = { lat: 24.799448, lng: 120.979021 };
    this.destination = { lat: 24.799524, lng: 120.975017 };
  }

  onSelection(event, toggleStatus) {
    for (let location of this.weddingLocations) {
      if (location === toggleStatus) {
        this.weddingLocationsCoordinates[location] = {
          longitude: event.coords.lng,
          latitude: event.coords.lat,
        }
      }
    }
  }

  addNewLocation(newLocation: string) {
    this.weddingLocations.push(newLocation);
    this.weddingLocationsCoordinates[newLocation] = new Coordinate(1,1);
    this.newLocationIsInEditing = false;
  }

  deleteLocation(location: string) {
    console.log(location);
  }

  renameLocation(location: string) {
    console.log(location);
  }
}
