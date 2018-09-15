import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {Wedding} from "../../../../models/wedding.model";
import {WeddingService} from "../../../../services/wedding.service";
import {Subscription} from "rxjs/Subscription";
import {share} from "rxjs/operators";
import {Observable} from "rxjs/Observable";
import {ChatService} from "../../../../services/chat.service";

@Component({
  selector: 'app-info-card-admin',
  templateUrl: './info-card-admin.component.html',
  styleUrls: ['./info-card-admin.component.css']
})
export class InfoCardAdminComponent implements OnInit {

  currentWedding: Observable<Object>;

  constructor(
    private weddingService: WeddingService
  ) {
    this.weddingService.getInfo();
    this.weddingService.getUser();
  }

  ngOnInit() {
    this.currentWedding = this.weddingService.infoUpdate.asObservable();

  }

}

