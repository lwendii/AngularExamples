import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserOverviewRoutingModule } from './user-overview-routing.module';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DialogConfirmationComponent } from './dialog-confirmation/dialog-confirmation.component';
import { UserOverviewBasisComponent } from './user-overview-basis/user-overview-basis.component';

@NgModule({
  declarations: [
    DialogBodyComponent,
    DialogConfirmationComponent,
    UserOverviewBasisComponent
  ],
  imports: [
    CommonModule,
    UserOverviewRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    UserOverviewBasisComponent
  ]
})
export class UserOverviewModule { }
