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
    console.log("on init");
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((data) => data.json())
      .then(data => console.log(data))
      .catch((error) => console.log("error: " + error));

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => console.log(json));
  }
}
