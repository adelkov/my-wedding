import {Component, OnInit} from "@angular/core";
import {InfoCardService} from "../../../../services/info-card.service";

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls:['./info-card.component.css']
})
export class InfoCardComponent implements OnInit{

  weddingDescription: String = "";

  constructor(public infoCardService: InfoCardService) {}

  ngOnInit() {
    this.weddingDescription = this.infoCardService.getInfoCardData().description;
  }
}
