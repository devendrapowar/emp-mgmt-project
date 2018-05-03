import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { EmployeeListComponent } from './employee-list/employee-list.component';
const routes: Routes = [
  { path: '', redirectTo: '/empoloyee', pathMatch: 'full' },
  { path: 'empoloyee', component: EmployeeListComponent }
];
@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes) 
  ],
  declarations: []
})
export class AppRoutingModule { }
