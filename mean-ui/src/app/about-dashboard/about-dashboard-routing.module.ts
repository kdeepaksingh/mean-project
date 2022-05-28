import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutDashboardComponent } from './about-dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: '', component: AboutDashboardComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'contactus', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutDashboardRoutingModule { }
