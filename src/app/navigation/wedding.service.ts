import {Injectable} from '@angular/core';
import {Wedding} from "./wedding.model";

@Injectable()
export class WeddingService {

  private weddings = [
    new Wedding('jozsibela2018', 'január 2.', 'admin', [], []),
    new Wedding('julizoliLOVE', 'január 2.', 'guest', [], []),
    new Wedding('dsfasdf', 'január 2.', 'guest', [], []),
    new Wedding('fsda', 'január 2.', 'guest', [], []),
    new Wedding('fdsafs', 'február 2.', 'guest', [], []),
    new Wedding('sdfsad', 'január 23.', 'guest', [], [])
  ]

  constructor() {
  }

  getWUserWithUserID(userID: string) {
    return this.weddings;
  }

  addNewWedding(userID: string, wedding: Wedding) {
    // todo
  }
}
