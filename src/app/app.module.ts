import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPageModule } from './_component/admin-page/admin-page.module';
import { HomePageModule } from './_component/home-page/home-page.module';
import { UserOverviewModule } from './_component/user-overview/user-overview.module';
import { PageNotFoundComponent } from './_component/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomePageModule,
    UserOverviewModule,
    AdminPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
