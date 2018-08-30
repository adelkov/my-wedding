import {Component, Input, OnInit} from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import {Wedding} from "../wedding.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    // ToDo: getting wedding details via wedding-name AJAX
  }
}
