import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutDashboardRoutingModule } from './about-dashboard-routing.module';
import { AboutDashboardComponent } from './about-dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  declarations: [
    AboutDashboardComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    AboutDashboardRoutingModule
  ]
})
export class AboutDashboardModule { }
