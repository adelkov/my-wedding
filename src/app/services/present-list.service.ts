import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Subject} from "rxjs/Subject";
import {Present} from "../models/present.model";
import {AuthService} from "../auth/auth.service";

@Injectable({ providedIn: "root" })
export class PresentListService {

  private presentList: Present[] = [];
  private presentsUpdated = new Subject<Present[]>();

  constructor(private httpClient: HttpClient, private authService: AuthService) {}

  getPresentListUpdateListener() {
    return this.presentsUpdated.asObservable();
  }

  getPresentList(){
    console.log(this.authService.accessToken);
    this.httpClient.get<{message: string, data: Present[] }>(
     'http://localhost:3000/api/presents', {
       headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.accessToken}`)
      })
      .subscribe(responseData => {
        this.presentList = responseData.data;
        this.presentsUpdated.next([...this.presentList])
      });
    return this.presentList;
  }

  presentSelected(presentId: number){
    this.presentList.find(x => x.id === presentId).isTaken = true;
    this.httpClient
      .patch('http://localhost:3000/api/presents/' + presentId, "isTaken")
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  addPresent(presentName: string, presentLink: string){
    const present: Present = {id: null, name: presentName, link: presentLink, isTaken: false, owner: null};
    this.httpClient
      .post<{ message: string, presentId: number }>
      ('http://localhost:3000/api/presents', present)
      .subscribe(responseData => {
        console.log(responseData.message);
        present.id = responseData.presentId;
        this.presentList.push(present);
        this.presentsUpdated.next([...this.presentList]);
      })
  }
}
