import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, share} from 'rxjs/operators';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {WeddingService} from "../services/wedding.service";
import {Wedding} from "../models/wedding.model";
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
  subURL: Subscription;
  myWeddings: Observable<String[]>;
  menuOpen = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    public dialog: MatDialog,
    private weddingService: WeddingService,
    private breakpointObserver: BreakpointObserver,
  ) {
  }

  ngOnInit() {
    this.myWeddings = this.weddingService.userUpdate.asObservable();
  }

  ngOnDestroy() {
    this.subURL.unsubscribe();
  }

  toggleMenuIcon() {
    this.menuOpen = !this.menuOpen;
  }


  openWeddingDialog() {
    const dialogRef = this.dialog.open(NewWeddingDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  goTo(location: string): void {
    let wait = 100;
    const element = document.querySelector('#' + location);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'})
      }, wait)
    }
  }


  loadWedding() {
    this.weddingService.getInfo();
  }
}
