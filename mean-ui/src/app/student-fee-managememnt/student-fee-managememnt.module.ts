import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentFeeManagememntRoutingModule } from './student-fee-managememnt-routing.module';
import { StudentFeeManagememntComponent } from './student-fee-managememnt.component';
import { StudentFeeManagementSystemComponent } from './student-fee-management-system/student-fee-management-system.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    StudentFeeManagememntComponent,
    StudentFeeManagementSystemComponent
  ],
  imports: [
    CommonModule,
    StudentFeeManagememntRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class StudentFeeManagememntModule { }
