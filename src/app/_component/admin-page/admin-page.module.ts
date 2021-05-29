import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPageRoutingModule } from './admin-page-routing.module';
import { AdminPageBasisComponent } from './admin-page-basis/admin-page-basis.component';

import { MatTabsModule } from '@angular/material/tabs';
import { UserOverviewBasisComponent } from '../user-overview/user-overview-basis/user-overview-basis.component';
import { UserOverviewModule } from '../user-overview/user-overview.module';

@NgModule({
  declarations: [
    AdminPageBasisComponent
  ],
  imports: [
    CommonModule,
    AdminPageRoutingModule,
    MatTabsModule,
    UserOverviewModule
  ],
  exports: [
  ]
})
export class AdminPageModule { }
