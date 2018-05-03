import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {Emp} from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  emps:Emp[];
  // selectedHero:Emp;
  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
    // console.log('employee ', this.emps);
  }
  
  getEmployees(): void {
    this.employeeService.getEmployees()
    .subscribe(EMPS => this.emps = EMPS);
    // this.emps = this.employeeService.getEmployees();
  }
}
