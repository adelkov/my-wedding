import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs/Subscription";
import {PresentListService} from "../../../../services/present-list.service";
import {Present} from "../../../../models/present.model";

@Component({
  selector: 'app-present-guest',
  templateUrl: './present-list-guest.component.html',
  styleUrls: ['./present-list-guest.component.css']
})
export class PresentListGuestComponent implements OnInit, OnDestroy{
  presentList: Present[] = [];
  private presentListSub: Subscription;

  constructor(public presentListService: PresentListService) {}

  ngOnInit(): void {
    this.presentListService.getPresentList();
    this.presentListSub = this.presentListService.getPresentListUpdateListener()
      .subscribe((presents: Present[]) => {
        this.presentList = presents;
      });
  }

  ngOnDestroy(): void {
    this.presentListSub.unsubscribe();
  }

  onSelection(event, item){
    this.presentListService.presentSelected(event.option.value.id);
  }


}
