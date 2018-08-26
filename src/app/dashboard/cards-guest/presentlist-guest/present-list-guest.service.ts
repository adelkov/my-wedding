import {Injectable} from "@angular/core";
import {Present} from "../../models/present.model";
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs/Subject";

@Injectable({ providedIn: "root" })
export class PresentListGuestService {

  private presentList: Present[] = [];
  private presentsUpdated = new Subject<Present[]>();

  constructor(private httpClient: HttpClient) {}

  getPresentListUpdateListener() {
    return this.presentsUpdated.asObservable();
  }

  getPresentList(){
    this.httpClient.get<{message: string, data: Present[] }>(
     'http://localhost:3000/api/presents')
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
}
