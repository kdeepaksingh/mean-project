import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelDashboardComponent } from './hotel-dashboard/hotel-dashboard.component';
import { HotelManagementComponent } from './hotel-management.component';

const routes: Routes = [
  { path: '', component: HotelManagementComponent },
  { path: 'hotel-dashboard', component: HotelDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelManagementRoutingModule { }
