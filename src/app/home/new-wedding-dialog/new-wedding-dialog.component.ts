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

  constructor(
    private weddingService: WeddingService,
    public dialogRef: MatDialogRef<NewWeddingDialogComponent>
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    let newWedding = new Wedding(
      this.newWeddingForm.value.name,
      this.newWeddingForm.value.date,
      this.newWeddingForm.value.name,
      this.newWeddingForm.value.description
    );
    this.weddingService.addNewWedding(newWedding);
    this.dialogRef.close();
  }
}
