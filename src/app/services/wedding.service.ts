import {Injectable, OnInit} from '@angular/core';
import {Wedding} from "../models/wedding.model";
import {HttpClient, HttpParams} from "@angular/common/http";
import "rxjs-compat/add/operator/map";
import {Subject} from "rxjs/Subject";
import {ActivatedRoute, ActivationEnd, Params, Router} from "@angular/router";
import {environment} from "../../environments/environment";

@Injectable()
export class WeddingService implements OnInit {
  weddingName: String;
  wedding: Wedding;
  userid = "5b9d215de432210014157bba";
  public infoUpdate = new Subject<Object>();
  public userUpdate = new Subject<String[]>();

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    ) {

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
          this.infoUpdate.next(resp[0]);
        }
      )
  }

/*  getUser() {
    /!** GET User object from server *!/
    this.http.get<string[]>(
      environment.HOST + '/api/users/' + this.userid)
      .subscribe((response) => {
          this.userUpdate.next(response["user"]["myWeddings"])
        }
      )
  }*/

  getUser() {
    this.http.get<String[]>(
      environment.HOST + '/api/weddings')
      .subscribe((response) => {
        this.userUpdate.next(response)
      }
    )
  }

}
