import {Injectable} from '@angular/core';
import {Wedding} from "../models/wedding.model";
import {HttpClient, HttpParams} from "@angular/common/http";
import {User} from "../models/user.model";
import "rxjs-compat/add/operator/map";
import {Subject} from "rxjs/Subject";

@Injectable()
export class WeddingService {

  public onUserUpdate = new Subject<User>();
  public onDashboardUpdate = new Subject<Wedding>();

  constructor(private http: HttpClient) {
  }

  addNewWedding(email: string, wedding: Wedding) {
    // POST new wedding to server
    console.log("start sending POST Request");
    let params = new HttpParams().set("email", email);
    return this.http.post('http://localhost:8080/newwedding', wedding, {params: params})
      .subscribe(
        () => this.getUserWithEmail(email)
      )
  }

  getUserWithEmail(email: string) {
    /** GET User object from server */
    console.log("update starts...");
    let params = new HttpParams().set("email", email); //Create new HttpParams
    this.http.get<User>(
      'http://localhost:8080/user', {params: params})
      .subscribe(responseUser => {
        let user = new User();
        Object.assign(user, responseUser);
        this.onUserUpdate.next(user);
        console.log("GET request sent for User object.");
        console.log(responseUser)
      });
  }
}
