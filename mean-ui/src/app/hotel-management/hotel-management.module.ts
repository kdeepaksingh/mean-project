import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelManagementRoutingModule } from './hotel-management-routing.module';
import { HotelManagementComponent } from './hotel-management.component';
import { HotelDashboardComponent } from './hotel-dashboard/hotel-dashboard.component';
import { MaterialLibModule } from '../material-lib/material-lib.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    HotelManagementComponent,
    HotelDashboardComponent
  ],
  imports: [
    CommonModule,
    HotelManagementRoutingModule,
    MaterialLibModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class HotelManagementModule { }
