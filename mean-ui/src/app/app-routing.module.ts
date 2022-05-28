import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'sign-up',component:SignUpComponent},
  { path: 'books-shop', loadChildren: () => import('./books-shop/books-shop.module').then(m => m.BooksShopModule) },
  { path: 'studentFeeManagement', loadChildren: () => import('./student-fee-managememnt/student-fee-managememnt.module').then(m => m.StudentFeeManagememntModule) },
  { path: 'hotel-management', loadChildren: () => import('./hotel-management/hotel-management.module').then(m => m.HotelManagementModule) },
  { path: 'about-dashboard', loadChildren: () => import('./about-dashboard/about-dashboard.module').then(m => m.AboutDashboardModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
