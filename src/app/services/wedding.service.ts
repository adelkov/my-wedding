import {Injectable, OnInit} from '@angular/core';
import {Wedding} from "../models/wedding.model";
import {HttpClient, HttpParams} from "@angular/common/http";
import {User} from "../models/user.model";
import "rxjs-compat/add/operator/map";
import {Subject} from "rxjs/Subject";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute, Params} from "@angular/router";
import {Observable, of} from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable()
export class WeddingService implements OnInit {
  weddingName: String;
  wedding: Wedding;
  userid = "5b9a65320394b2347d0d115b";
  public infoUpdate = new Subject<Object>();
  public userUpdate = new Subject<String[]>();

  constructor(
    private http: HttpClient,
  ) {

  }

  ngOnInit() {
  }

  addNewWedding(wedding: Wedding) {
    this.http.post(environment.HOST + '/api/weddings/' + this.userid, wedding)
      .subscribe(
        () => this.getUser(), // here emit an event to update user
        (error) => {
          console.log(error)
        }
      )
  }


  getInfo() {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe((resp) => {
          this.infoUpdate.next(resp);
        }
      )
  }

  getUser() {
    /** GET User object from server */
    console.log("i get called");
    this.http.get<string[]>(
      environment.HOST + '/api/users/' + this.userid)
      .subscribe((response) => {
          this.userUpdate.next(response["user"]["myWeddings"])
        }
      )
  }
}
