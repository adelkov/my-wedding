import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, share} from 'rxjs/operators';
import {WeddingService} from "../services/wedding.service";
import {MatDialog} from "@angular/material";
import {NewWeddingDialogComponent} from "./new-wedding-dialog/new-wedding-dialog.component";
import { Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {

  id: String;
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
    private router: Router
  ) {

  }

  ngOnInit() {
    this.myWeddings = this.weddingService.userUpdate.asObservable();
    this.weddingService.getUser();
  }

  ngOnDestroy() {
  }

  toggleMenuIcon() {
    this.menuOpen = !this.menuOpen;
  }


  openWeddingDialog() {
    this.dialog.open(NewWeddingDialogComponent);
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
}
