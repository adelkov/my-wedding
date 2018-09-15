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
  weddingName = "juliaandmark";


  constructor(
    private http: HttpClient
  ) {
  }

  updateMarker(marker) {
    console.log(marker);
    this.http.patch(environment.HOST + '/api/markers/' + this.weddingName, marker)
      .subscribe(
        (response) => {
          console.log(response);
          this.getMarkers();
        },
        (error) => {
          console.log(error)
        }
      )
  }

  addMarker(marker: Marker) {
    console.log(marker.id);
    this.http.post(environment.HOST + '/api/markers/' + this.weddingName, marker)
      .subscribe(
        (response) => {
          console.log(response);
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
}
