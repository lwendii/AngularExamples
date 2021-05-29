import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DialogConfirmationComponent } from '../dialog-confirmation/dialog-confirmation.component';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.css']
})
export class DialogBodyComponent implements OnInit {
  content: string = "Place content."

  constructor(public dialogRef: MatDialogRef<DialogBodyComponent>, 
              @Inject(MAT_DIALOG_DATA) public data: any,
              private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close("Thanks for using me!");
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = "some data";
    let dialogRef = this.matDialog.open(DialogConfirmationComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(value => {
      console.log(`Dialog sent: ${value}`);
      if(value === 'ok'){
        this.content = 'Clicked ok';
      }
    })
  }

}
