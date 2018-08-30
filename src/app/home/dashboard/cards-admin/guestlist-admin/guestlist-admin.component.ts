import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Subject} from "rxjs/Subject";
import {Guest} from "./guest.model";
import {GuestlistService} from "./guestlist.service";


/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-guestlist-admin',
  styleUrls: ['guestlist-admin.component.css'],
  templateUrl: 'guestlist-admin.component.html',
})
export class GuestlistAdminComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'rsvp', 'guests'];
  dataSource: MatTableDataSource<Guest>;
  guests: Guest[];
  guestChosen = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private guestService: GuestlistService) {
    this.guests =  this.guestService.getGuests();

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.guests);
  }

  ngOnInit() {
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
}
