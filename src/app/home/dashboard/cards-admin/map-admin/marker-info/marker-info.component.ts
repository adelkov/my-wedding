import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-marker-info',
  templateUrl: './marker-info.component.html',
  styleUrls: ['./marker-info.component.css']
})
export class MarkerInfoComponent implements OnInit {
  @Input() marker: any;
  constructor() { }

  ngOnInit() {
  }

}
