import {Component, Input, OnInit} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import {InfoCardComponent} from "./infocard/info-card.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  @Input() weddingName: String;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    // ToDo: getting wedding details via wedding-name AJAX
  }
}
