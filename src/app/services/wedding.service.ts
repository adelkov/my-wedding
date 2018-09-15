import {Injectable, OnInit} from '@angular/core';
import {Wedding} from "../models/wedding.model";
import {HttpClient, HttpParams} from "@angular/common/http";
import "rxjs-compat/add/operator/map";
import {Subject} from "rxjs/Subject";
import {ActivatedRoute, Params} from "@angular/router";
import {environment} from "../../environments/environment";

@Injectable()
export class WeddingService implements OnInit {
  weddingName = "Julia%20&%20Mark%202018";
  wedding: Wedding;
  userid = "5b9d215de432210014157bba";
  public infoUpdate = new Subject<Object>();
  public userUpdate = new Subject<String[]>();

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      console.log(params)
    })
  }

  ngOnInit() {


  }

  addNewWedding(wedding: Wedding) {
    this.http.post(environment.HOST + '/api/weddings/' + this.userid, wedding)
      .subscribe(
        () => this.getUser(),
        (error) => {
          console.log(error)
        }
      )
  }


  getInfo() {
    this.http.get(environment.HOST + '/api/weddings/' + this.weddingName)
      .subscribe((resp) => {
          console.log(resp);
          this.infoUpdate.next(resp[0]);
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
