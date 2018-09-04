import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {WeddingService} from "./wedding.service";
import {Wedding} from "./wedding.model";
import {MapAdminComponent} from "./dashboard/cards-admin/map-admin/map-admin.component";
import {MatDialog} from "@angular/material";
import {NewWeddingDialogComponent} from "./new-wedding-dialog/new-wedding-dialog.component";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {

  id: String;
  email = "juli@ema.il"; // todo get from Auth0
  subURL: Subscription;
  subUserUpdate: Subscription;
  myWeddings: Wedding[];
  guestWeddings: Wedding[];
  menuOpen = false;
  currentWedding: Wedding;
  wedding = new Wedding("Another new wedding", "January 2, 2018", "Budapest", "super wedding");

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    public dialog: MatDialog,
    private weddingService: WeddingService,
    private breakpointObserver: BreakpointObserver,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    // subscribe and get ever changing parameters to update model
    this.subURL = this.route.params.subscribe(
      (params) => {
        this.id = params['weddingname'];
      }
    );
    this.subUserUpdate = this.weddingService.onUserUpdate
      .subscribe(
        (user) => {
          this.myWeddings = user.myWeddings;
          this.guestWeddings = user.guestWeddings;
        }
      );
  }

  ngOnDestroy() {
    this.subURL.unsubscribe();
  }

  toggleMenuIcon() {
    this.menuOpen = !this.menuOpen;
  }

  onAddNewWedding() {
    this.weddingService.addNewWedding(this.email, this.wedding);
  }

  setupNavigationButtons() {
    this.weddingService.getUserWithEmail(this.email);
  }

  updateDashBoard(wedding: Wedding) {
    this.weddingService.onDashboardUpdate.next(wedding)
  }

  openWeddingDialog() {
    const dialogRef = this.dialog.open(NewWeddingDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }


}
