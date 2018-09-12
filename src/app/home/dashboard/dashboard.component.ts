import {Component, Input, OnInit} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {ActivatedRoute, Params} from "@angular/router";
import {WeddingService} from "../../services/wedding.service";
import {Subscription} from "rxjs/Subscription";
import {Wedding} from "../../models/wedding.model";
import {share} from "rxjs/operators";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  wedding: Observable<Wedding>;
  test: {name: String, place: String};
  weddingSub: Subscription;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private weddingService: WeddingService,
    private route: ActivatedRoute
  ) {
  }

  showWedding(){
    console.log(this.wedding);
  }

  ngOnInit() {


    // this.weddingName = this.route.snapshot.params["weddingName"];
    // this.route.params.subscribe((params: Params) => {
    //   this.weddingName = params["weddingName"];
    //   this.weddingService.udpateWedding(this.weddingName);
    // })
  }

    // this.weddingService.getWedding().subscribe(wedding => this.wedding = wedding)

    // this.route.queryParams
    //   .subscribe(
    //     (queryParams: Params) => {
    //       console.log(queryParams)
    //     }
    //   );
    // this.route.fragment.subscribe();
    // const weddingName = +this.route.snapshot.params['weddingName'];

    //   fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     .then((data) => data.json())
    //     .then(data => console.log(data))
    //     .catch((error) => console.log("error: " + error));
    //
    //   fetch('https://jsonplaceholder.typicode.com/posts', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       title: 'foo',
    //       body: 'bar',
    //       userId: 1
    //     }),
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8"
    //     }
    //   })
    //     .then(response => response.json())
    //     .then(json => console.log(json));
}

