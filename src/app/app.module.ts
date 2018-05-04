import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {EmployeeService} from './employee.service';
import { AppRoutingModule } from './/app-routing.module';
import { SearchEmpPipe } from './search-emp.pipe';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    SearchEmpPipe,
    UpdateEmpComponent,
    AddemployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
