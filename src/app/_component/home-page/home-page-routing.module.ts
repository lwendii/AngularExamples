import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeBasisComponent } from './home-basis/home-basis.component';

const routes: Routes = [
  { path: '', component: HomeBasisComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
