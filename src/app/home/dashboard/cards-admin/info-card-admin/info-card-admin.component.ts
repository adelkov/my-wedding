import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {Wedding} from "../../../../models/wedding.model";
import {WeddingService} from "../../../../services/wedding.service";
import {Subscription} from "rxjs/Subscription";
import {share} from "rxjs/operators";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-info-card-admin',
  templateUrl: './info-card-admin.component.html',
  styleUrls: ['./info-card-admin.component.css']
})
export class InfoCardAdminComponent implements OnInit {

  currentWedding: Observable<any>;

  constructor(
    private weddingService: WeddingService
  ) {
  }

  ngOnInit() {
    this.currentWedding = this.weddingService.getWedding().pipe(share());
  }
}
