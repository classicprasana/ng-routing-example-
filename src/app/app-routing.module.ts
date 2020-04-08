import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { HrhelpdeskComponent } from './hrhelpdesk/hrhelpdesk.component';
import { LearningComponent } from './learning/learning.component';
import { PayrollComponent } from './payroll/payroll.component';
import { TechComponent } from './tech/tech.component';


const routes: Routes = [
  
    {path:"", redirectTo:"/hr", pathMatch:"full"}, 
    {path:"home",component:HomeComponent},
    {path:"profile",component:ProfileComponent},
    {path:"hr",component:HrhelpdeskComponent},
    {path:"learning/:tech",component:TechComponent},
    {path:"learning",component:LearningComponent},
    {path:"payroll",component:PayrollComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
