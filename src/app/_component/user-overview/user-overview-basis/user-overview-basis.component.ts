import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/_model/user.model';
import { UserService } from 'src/app/_services/user.service';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';

@Component({
  selector: 'app-user-overview-basis',
  templateUrl: './user-overview-basis.component.html',
  styleUrls: ['./user-overview-basis.component.css']
})
export class UserOverviewBasisComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email'];
  dataSource!: MatTableDataSource<User>;

  constructor(private userService: UserService, private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.userService.getUserList());
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: any) {
    this.dataSource.filter = event.target.value.trim().toLowerCase();

    if(this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = "some data";
    let dialogRef = this.matDialog.open(DialogBodyComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(value => {
      console.log(`Dialog sent: ${value}`);
    })
  }
}
