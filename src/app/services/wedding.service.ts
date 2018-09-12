import {Injectable, OnInit} from '@angular/core';
import {Wedding} from "../models/wedding.model";
import {HttpClient, HttpParams} from "@angular/common/http";
import {User} from "../models/user.model";
import "rxjs-compat/add/operator/map";
import {Subject} from "rxjs/Subject";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute, Params} from "@angular/router";
import {Observable, of} from 'rxjs';

@Injectable()
export class WeddingService implements OnInit {

  wedding: Wedding;
  public onUserUpdate = new Subject<User>();
  public onDashboardUpdate = new Subject<Wedding>();

  constructor(
    private http: HttpClient,
  ) {
  }

  ngOnInit() {
  }

  addNewWedding(email: string, wedding: Wedding) {
    // POST new wedding to server

    let params = new HttpParams().set("email", email);
    return this.http.post('http://localhost:8080/newwedding', wedding, {params: params})
      .subscribe(
        () => this.getUserWithEmail(email)
      )
  }

  udpateWedding(weddingName: String): void {
    this.http.get<Wedding>(
      'http://localhost:8080/wedding/' + weddingName)
      .subscribe(
        wedding => console.log(wedding),
        (err) => { // for mocking purposes
          let wedding = new Wedding("My first wedding", "dateMock", "placeMock", "descrMock");
          this.onDashboardUpdate.next(wedding);
        }
      );
  }

  getUserWithEmail(email: string) {
    /** GET User object from server */
    let params = new HttpParams().set("email", email); //Create new HttpParams
    this.http.get<User>(
      'http://localhost:8080/user', {params: params})
      .subscribe(
        responseUser => {
          this.onUserUpdate.next(responseUser);
        },
        (error) => {
          console.log("error gets called in wedding service");
          this.onUserUpdate.next(
            new User("email",
              [new Wedding("teszt Wedding", "date", "pa", "de")],
              [new Wedding("teszt Wedding", "date", "pa", "de")],
              12)
          )
        }
      );
  }
}
