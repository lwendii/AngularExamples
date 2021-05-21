import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageBasisComponent } from './admin-page-basis/admin-page-basis.component';

const routes: Routes = [
  { path: '', component: AdminPageBasisComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPageRoutingModule { }
