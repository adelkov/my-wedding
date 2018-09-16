import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {Wedding} from "../../../../models/wedding.model";
import {WeddingService} from "../../../../services/wedding.service";
import {Subscription} from "rxjs/Subscription";
import {share} from "rxjs/operators";
import {Observable} from "rxjs/Observable";
import {ChatService} from "../../../../services/chat.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-info-card-admin',
  templateUrl: './info-card-admin.component.html',
  styleUrls: ['./info-card-admin.component.css']
})
export class InfoCardAdminComponent implements OnInit {

  currentWedding: Observable<Object>;
  paramsSub: Subscription;

  constructor(
    private weddingService: WeddingService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.currentWedding = this.weddingService.infoUpdate.asObservable();

    this.weddingService.weddingName = this.route.snapshot.params.weddingName;

    this.paramsSub = this.route.params.subscribe(
      (params: Params) => {
        this.weddingService.weddingName = params.weddingName;
        this.weddingService.getInfo();
      }
    );
  }
}

