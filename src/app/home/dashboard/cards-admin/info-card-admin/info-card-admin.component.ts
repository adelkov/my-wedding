import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {Wedding} from "../../../wedding.model";
import {WeddingService} from "../../../wedding.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-info-card-admin',
  templateUrl: './info-card-admin.component.html',
  styleUrls: ['./info-card-admin.component.css']
})
export class InfoCardAdminComponent implements OnInit {

  private subDashboardUpdate: Subscription;
  currentWedding: Wedding;

  constructor(private weddingService: WeddingService) { }

  ngOnInit() {
    this.subDashboardUpdate = this.weddingService.onDashboardUpdate
      .subscribe(
        (wedding) => this.currentWedding = wedding
      )
  }
}
