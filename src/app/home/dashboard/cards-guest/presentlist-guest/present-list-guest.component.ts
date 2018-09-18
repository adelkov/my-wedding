import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs/Subscription";
import {PresentListService} from "../../../../services/present-list.service";
import {Present} from "../../../../models/present.model";
import {AuthService} from "../../../../auth/auth.service";

@Component({
  selector: 'app-present-guest',
  templateUrl: './present-list-guest.component.html',
  styleUrls: ['./present-list-guest.component.css']
})
export class PresentListGuestComponent implements OnInit, OnDestroy{
  presentList: Present[] = [];

  private presentListSub: Subscription;
  constructor(
    private presentListGuestService: PresentListService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.authReady.subscribe((next) => {
      this.presentListGuestService.getPresentList();
    });
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
