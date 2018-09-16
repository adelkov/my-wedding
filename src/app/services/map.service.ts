import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {Marker} from "../models/marker.model";
import {Subject} from "rxjs/Subject";
import {Observable, Subscription} from "rxjs/index";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {WeddingService} from "./wedding.service";
import {ActivatedRoute, ActivationEnd, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MapService {
  markerUpdate = new Subject<Marker[]>();
  weddingName: String;

  constructor(
    private http: HttpClient,
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
    this.http.delete(environment.HOST + '/api/markers/' + this.weddingName + '/' + marker._id)
      .subscribe((response) => {
          this.getMarkers();
        }
      )
  }


  getMarkers() {
    this.http.get(environment.HOST + '/api/markers/' + this.weddingName)
      .subscribe((response: Marker[]) => {
          this.markerUpdate.next(response["markers"])
        }
      )
  }
}
