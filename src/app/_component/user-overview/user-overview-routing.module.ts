import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserOverviewBasisComponent } from './user-overview-basis/user-overview-basis.component';

const routes: Routes = [
  { path: '', component: UserOverviewBasisComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserOverviewRoutingModule { }
