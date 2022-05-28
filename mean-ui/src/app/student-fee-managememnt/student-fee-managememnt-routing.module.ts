import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentFeeManagememntComponent } from './student-fee-managememnt.component';
import { StudentFeeManagementSystemComponent } from './student-fee-management-system/student-fee-management-system.component';

const routes: Routes = [
  { path: '', component: StudentFeeManagememntComponent,
    // children:[
    //   {path:'student-fees',component:StudentFeeManagementSystemComponent}
    // ]
  },
  {path:'student-fees',component:StudentFeeManagementSystemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentFeeManagememntRoutingModule { }
