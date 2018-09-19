import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {Wedding} from "../../../../models/wedding.model";
import {WeddingService} from "../../../../services/wedding.service";
import {Subscription} from "rxjs/Subscription";
import {share} from "rxjs/operators";
import {Observable} from "rxjs/Observable";
import {ChatService} from "../../../../services/chat.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {AuthService} from "../../../../auth/auth.service";

@Component({
  selector: 'app-info-card-admin',
  templateUrl: './info-card-admin.component.html',
  styleUrls: ['./info-card-admin.component.css']
})
export class InfoCardAdminComponent implements OnInit, OnDestroy {
  authSub: Subscription;
  currentWedding: Observable<Object>;
  paramsSub: Subscription;

  constructor(
    private weddingService: WeddingService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {

    this.authSub = this.authService.authReady.subscribe(
      ()=> {
        this.initComponentData();
      }
    )
  }

  ngOnDestroy() {
    this.authSub.unsubscribe();
    this.paramsSub.unsubscribe();
  }

  initComponentData(){
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

