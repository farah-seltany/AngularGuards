import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { IsAdminGuard } from './is-admin.guard';
import { IsConnectedGuard } from './is-connected.guard';


const routes: Routes = [
  {
    path : 'admin', component : AdminPageComponent, canActivate: [IsAdminGuard]
  },
  {
    path : 'dashboard', component : DashboardPageComponent, canActivate: [IsConnectedGuard, IsAdminGuard]
  },
  {
    path : 'home', component : HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
