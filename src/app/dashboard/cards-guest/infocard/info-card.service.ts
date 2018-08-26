import {Injectable} from "@angular/core";

@Injectable({ providedIn: 'root'})
export class InfoCardService {
  private InfocardData = { "description": "jó lesz. gyertek."};

  getInfoCardData() {
    return this.InfocardData;
  }
}
