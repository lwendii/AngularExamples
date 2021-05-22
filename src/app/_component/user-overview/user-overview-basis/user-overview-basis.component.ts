import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/_model/user.model';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-user-overview-basis',
  templateUrl: './user-overview-basis.component.html',
  styleUrls: ['./user-overview-basis.component.css']
})
export class UserOverviewBasisComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email'];
  dataSource: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.dataSource = this.userService.getUserList();
    console.log(this.dataSource);
  }

}
