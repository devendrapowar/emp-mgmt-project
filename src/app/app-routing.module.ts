import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
const routes: Routes = [
  { path: '', redirectTo: '/empoloyee', pathMatch: 'full' },
  { path: 'empoloyee', component: EmployeeListComponent },
  { path: 'empoloyee/add', component: AddemployeeComponent }
  { path: 'empoloyee/:id', component: UpdateEmpComponent }
];
@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes) 
  ],
  declarations: []
})
export class AppRoutingModule { }
