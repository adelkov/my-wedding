import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {Marker} from "../../../../models/marker.model";
import {MapService} from "../../../../services/map.service";
import {share} from "rxjs/operators";
import {Observable} from "rxjs/Observable";
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-map-admin',
  templateUrl: './map-admin.component.html',
  styleUrls: ['./map-admin.component.css']
})
export class MapAdminComponent implements OnInit {
  markers: Observable<Marker[]>;
  latCenterView: number = 51.673858;
  lngCenterView: number = 7.815982;
  zoom: number = 8;
  public searchControl: FormControl;
  paramSub: Subscription;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private mapService: MapService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {
    this.markers = this.mapService.markerUpdate.asObservable();
  }

  ngOnInit() {

    this.paramSub = this.route.params.subscribe(
      (params: Params) => {
        this.mapService.weddingName = params.weddingName;
        this.mapService.getMarkers();
      }
    );

    // this.mapService.getMarkers();
    this.searchControl = new FormControl();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        console.log("running marker action");
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          this.setCurrentPosition()

          //set latitude, longitude and zoom
          this.latCenterView = place.geometry.location.lat();
          this.lngCenterView = place.geometry.location.lng();
          let marker =  new Marker(this.latCenterView, this.lngCenterView);
          this.mapService.addMarker(marker);
          this.zoom = 12;
        });
      });
    });
  }


  markerDragEnd(marker: Marker, event: any) {
    marker.lng = event.coords.lng;
    marker.lat = event.coords.lat;
    marker.isOpen = false;
    this.mapService.updateMarker(marker);
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latCenterView = position.coords.latitude;
        this.lngCenterView = position.coords.longitude;
      });
    }
  }
}
