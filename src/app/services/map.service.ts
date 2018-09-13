import {Injectable} from '@angular/core';
import {Marker} from "../models/marker.model";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(
    private http: HttpClient
  ) {
  }

  updateMarker(marker) {
  }

  addMarker(marker) {
    // http post marker

  }

  deleteMarker(marker) {

  }

  saveMarkers() {
  }

  getMarkers(): Observable<Marker[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1')
      .map((response: Marker[]) => {
          return response
        }
      )
  }

  udpateMarker(marker: any) {

  }

  update(marker: Marker) {
    // sent patch request to update
  }
}
