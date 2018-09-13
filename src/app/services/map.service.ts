import {Injectable} from '@angular/core';
import {Marker} from "../models/marker.model";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MapService {
  markerUpdate = new Subject<Marker[]>();

  // only for mocking purposes TODO: to be updated
  weddingName = "wed";


  constructor(
    private http: HttpClient
  ) {
  }

  updateMarker(marker) {
  }

  addMarker(marker) {
    this.http.post(environment.HOST + '/api/markers/' + this.weddingName, marker)
      .subscribe(
        (response) => {
          this.getMarkers();
        },
        (error) => {
          console.log(error)
        }
      )
  }

  deleteMarker(marker) {

  }


  getMarkers() {
    this.http.get(environment.HOST + '/api/markers/' + this.weddingName)
      .subscribe((response: Marker[]) => {
          this.markerUpdate.next(response["markers"])
        }
      )
  }

  udpateMarker(marker: any) {

  }

  update(marker: Marker) {
    // sent patch request to update
  }
}
