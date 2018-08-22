import {Injectable} from "@angular/core";

@Injectable({ providedIn: 'root'})
export class InfoCardService {
  private InfocardData = { "description": "csá. jó lesz. gyertek."};

  getInfoCardData() {
    return this.InfocardData;
  }
}
