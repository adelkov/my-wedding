import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Subject} from "rxjs/Subject";
import {Present} from "../models/present.model";
import {AuthService} from "../auth/auth.service";
import {map} from "rxjs/operators";
import {environment} from "../../environments/environment";

@Injectable({ providedIn: "root" })
export class PresentListService {

  private presentList: Present[] = [];
  private presentsUpdated = new Subject<Present[]>();

  constructor(private httpClient: HttpClient, private authService: AuthService) {}

  getPresentListUpdateListener() {
    return this.presentsUpdated.asObservable();
  }

  getPresentList(){

    /*const headerDict = {
      'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`,
      'SuperSecretUserAuthenticationHeader': `${this.authService.idToken}`
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };*/

    this.httpClient.get<{message: string, presents: any }>(
     environment.HOST + '/api/presents')
      .pipe(map((responseData) => {
        return responseData.presents.map(present => {
          return {
            id: present._id,
            name: present.name,
            link: present.link,
            owner: present.owner,
            isTaken: present.isTaken
          };
        });
      }))
      .subscribe(transformedData => {
        this.presentList = transformedData;
        this.presentsUpdated.next([...this.presentList])
      });
  }

  presentSelected(presentId: number){
    this.presentList.find(x => x.id === presentId).isTaken = true;
    this.httpClient
      .patch(environment.HOST + '/api/presents/' + presentId, "isTaken")
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  addPresent(presentName: string, presentLink: string){
    const present: Present = {id: null, name: presentName, link: presentLink, isTaken: false, owner: null};
    this.httpClient
      .post<{ message: string, presentId: number }>
      (environment.HOST + '/api/presents', present)
      .subscribe(responseData => {
        present.id = responseData.presentId;
        this.presentList.push(present);
        this.presentsUpdated.next([...this.presentList]);
      })
  }
}
