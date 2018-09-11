import {Component, EventEmitter, Inject, OnInit, Output, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Wedding} from "../../models/wedding.model";
import {NgForm} from "@angular/forms";
import {WeddingService} from "../../services/wedding.service";

@Component({
  selector: 'app-new-wedding-dialog',
  templateUrl: './new-wedding-dialog.component.html',
  styleUrls: ['./new-wedding-dialog.component.css']
})
export class NewWeddingDialogComponent implements OnInit {
  @ViewChild('f') newWeddingForm: NgForm;
  newWedding = new Wedding('', '', '', '');

  constructor(
    private weddingService: WeddingService,
    public dialogRef: MatDialogRef<NewWeddingDialogComponent>
  ) { }

  ngOnInit() {
  }

  onSubmit(){

    console.log("submission");
    this.newWedding.name = this.newWeddingForm.value.name;
    this.newWedding.date = this.newWeddingForm.value.date;
    this.newWedding.place = this.newWeddingForm.value.name;
    this.newWedding.description = this.newWeddingForm.value.description;
    this.weddingService.addNewWedding("juli@ema.il", this.newWedding);
    console.log("wedding added");
    this.dialogRef.close();
  }
}
