import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomeBasisComponent } from './home-basis/home-basis.component';


@NgModule({
  declarations: [
    HomeBasisComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
