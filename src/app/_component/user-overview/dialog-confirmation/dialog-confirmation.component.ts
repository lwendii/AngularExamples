import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-confirmation',
  templateUrl: './dialog-confirmation.component.html',
  styleUrls: ['./dialog-confirmation.component.css']
})
export class DialogConfirmationComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DialogConfirmationComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  cancel() {
    this.dialogRef.close("Cancelled!");
  }

  ok(){
    this.dialogRef.close("ok");
  }



}
