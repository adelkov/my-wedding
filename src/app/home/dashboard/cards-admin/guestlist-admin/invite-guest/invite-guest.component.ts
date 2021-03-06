import {Component, OnInit, ViewChild} from '@angular/core';
import {Wedding} from "../../../../../models/wedding.model";
import {MatDialogRef} from "@angular/material";
import {Guest} from "../../../../../models/guest.model";
import {NgForm} from "@angular/forms";
import {GuestlistService} from "../../../../../services/guestlist.service";

@Component({
  selector: 'app-invite-guest',
  templateUrl: './invite-guest.component.html',
  styleUrls: ['./invite-guest.component.css']
})
export class InviteGuestComponent implements OnInit {
  @ViewChild('f') invitationForm: NgForm;
  constructor(
    private guestListService: GuestlistService,
    public dialogRef: MatDialogRef<InviteGuestComponent>
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    let guest = new Guest(
      this.invitationForm.value.email,
      this.invitationForm.value.name,
      this.invitationForm.value.guests
    );

    this.dialogRef.close();
    this.guestListService.inviteGuest(guest)
  }

}
