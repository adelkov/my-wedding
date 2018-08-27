import {Injectable} from '@angular/core';
import {Wedding} from "./wedding.model";

@Injectable()
export class WeddingService {

  private myWeddings = [
    new Wedding('jozsibela2018', 'január 2.', 'admin', [], []),
  ];

  private guestWeddings = [
    new Wedding('julizoliLOVE', 'január 2.', 'guest', [], []),
    new Wedding('Love forest 2017', 'január 2.', 'guest', [], []),
    new Wedding('Nyuszi és Husi', 'január 2.', 'guest', [], []),
    new Wedding('Wedding by the lake', 'február 2.', 'guest', [], []),
    new Wedding('Timi & Zoli', 'január 23.', 'guest', [], [])
  ]

  constructor() {
  }

  getWUserWithUserID(userID: string) {
    return {
      myWeedings: this.myWeddings,
      guestWeddings: this.guestWeddings
    }
  }

  addNewWedding(userID: string, wedding: Wedding) {
    // todo
  }
}
