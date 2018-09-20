import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Subject} from "rxjs/Subject";
import {Guest} from "../../../../models/guest.model";
import {GuestlistService} from "../../../../services/guestlist.service";
import {NewWeddingDialogComponent} from "../../../new-wedding-dialog/new-wedding-dialog.component";
import {InviteGuestComponent} from "./invite-guest/invite-guest.component";
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs";
import {AuthService} from "../../../../auth/auth.service";


/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-guestlist-admin',
  styleUrls: ['guestlist-admin.component.css'],
  templateUrl: 'guestlist-admin.component.html',
})
export class GuestlistAdminComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'rsvp', 'guests'];
  dataSource: MatTableDataSource<Guest>;
  guests: Guest[];
  paramSub: Subscription;
  authSub: Subscription;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    private guestService: GuestlistService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {
    this.guests =  this.guestService.getGuests();

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.guests);
  }

  ngOnInit() {
    this.authSub = this.authService.authReady.subscribe(
      () => {
        this.paramSub = this.route.params.subscribe(
          (params: Params) => {
            this.guestService.weddingName = params.weddingName;
            // Todo: get guests!!!
          }
        );
      }
    );

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onClickRow(row) {
    this.guestService.guestDisplayed = true;
    this.guestService.guestChosen.next(row)
  }

  openInvitationDialog() {
    this.dialog.open(InviteGuestComponent);
  }
}
