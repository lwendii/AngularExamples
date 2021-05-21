import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserOverviewRoutingModule } from './user-overview-routing.module';
import { UserOverviewBasisComponent } from './user-overview-basis/user-overview-basis.component';


@NgModule({
  declarations: [
    UserOverviewBasisComponent
  ],
  imports: [
    CommonModule,
    UserOverviewRoutingModule
  ]
})
export class UserOverviewModule { }
