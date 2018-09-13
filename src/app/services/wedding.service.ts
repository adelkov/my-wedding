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
  userid = "5b9a5b64aaff7f0015d7121a";


  constructor(
    private http: HttpClient,
  ) {
  }

  ngOnInit() {
  }

  addNewWedding(wedding: Wedding) {
    // POST new wedding to server

    return this.http.post('https://my-wedding-backend.herokuapp.com/api/weddings/' + this.userid, wedding)
      .subscribe(
        (wedding) => console.log(wedding),
        (error) => {
          console.log(error)
        }
      )
  }


  getWedding(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1')
      .map((response: Response) => {
          return response
        }
      )
  }

  getUserWithId() {
    /** GET User object from server */
    return this.http.get<string[]>(
      'https://my-wedding-backend.herokuapp.com/api/users/' + this.userid)
      .map((response) => {
          console.log(response["user"]["myWeddings"]);
          return response["user"]["myWeddings"]
        }
      )
  }
}
