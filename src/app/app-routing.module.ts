import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageModule } from './_component/admin-page/admin-page.module';
import { HomePageModule } from './_component/home-page/home-page.module';
import { PageNotFoundComponent } from './_component/page-not-found/page-not-found.component';
import { UserOverviewModule } from './_component/user-overview/user-overview.module';

const routes: Routes = [
  { path: 'homepage', loadChildren: () => HomePageModule },
  { path: 'user-overview', loadChildren: () => UserOverviewModule },
  { path: 'admin', loadChildren: () => AdminPageModule },
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
