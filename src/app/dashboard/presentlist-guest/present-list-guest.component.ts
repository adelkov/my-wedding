import {Component, OnDestroy, OnInit} from "@angular/core";
import {PresentListGuestService} from "./present-list-guest.service";
import {Present} from "../../models/present.model";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-present-guest',
  templateUrl: './present-list-guest.component.html',
  styleUrls: ['./present-list-guest.component.css']
})
export class PresentListGuestComponent implements OnInit, OnDestroy{
  presentList: Present[] = [];

  private presentListSub: Subscription;
  constructor(private presentListGuestService: PresentListGuestService) {}

  ngOnInit(): void {
    this.presentListGuestService.getPresentList();
    this.presentListSub = this.presentListGuestService.getPresentListUpdateListener()
      .subscribe((presents: Present[]) => {
        this.presentList = presents;
      });
  }

  ngOnDestroy(): void {
    this.presentListSub.unsubscribe();
  }

  onSelection(event, item){
    this.presentListGuestService.presentSelected(event.option.value.id);
  }


}
