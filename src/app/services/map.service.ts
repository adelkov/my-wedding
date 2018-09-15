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
  weddingName = "Julia%20&%20Mark%202018";


  constructor(
    private http: HttpClient
  ) {
  }

  updateMarker(marker: Marker) {
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

  deleteMarker(marker: Marker) {
    console.log(marker._id);
    this.http.delete(environment.HOST + '/api/markers/' + this.weddingName + '/' + marker._id)
      .subscribe((response) => {
          console.log("ok delet done, getting.markers...");
          this.getMarkers();
        }
      )
  }


  getMarkers() {
    this.http.get(environment.HOST + '/api/markers/' + this.weddingName)
      .subscribe((response: Marker[]) => {
          console.log("current markers: " + response["markers"].length);
          this.markerUpdate.next(response["markers"])
        }
      )
  }
}
