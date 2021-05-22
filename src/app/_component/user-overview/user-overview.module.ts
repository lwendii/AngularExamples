import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserOverviewRoutingModule } from './user-overview-routing.module';
import { UserOverviewBasisComponent } from './user-overview-basis/user-overview-basis.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    UserOverviewBasisComponent
  ],
  imports: [
    CommonModule,
    UserOverviewRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class UserOverviewModule { }
