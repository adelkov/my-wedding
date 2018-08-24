import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {WeddingService} from "./wedding.service";
import {Wedding} from "./wedding.model";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {

  id: String;
  userID = 102030; // todo get from Auth0
  sub: Subscription;
  weddings: Wedding[];


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  constructor(
    private weddingService: WeddingService,
    private breakpointObserver: BreakpointObserver,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    // subscribe and get ever changing parameters to update model
    this.sub = this.route.params.subscribe(
      (params) => {
        this.id = params['id']; // + sign could cast to number
      }
    )

    this.weddings = this.weddingService.getWUserWithUserID('random_user_ID');

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
