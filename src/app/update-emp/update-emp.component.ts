import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {EmployeeService} from '../employee.service';
import {Emp} from '../employee';
@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {
   emp: Emp;
  constructor( 
    private route: ActivatedRoute,
    private employeeService:EmployeeService,
    private location: Location
  ) { }

  ngOnInit(): void {
    // this.getEmployee();
  }
  
  // getEmployee(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.employeeService.getEmployee(id)
  //     .subscribe(emp => this.emp = emp);
  //     console.log(this.emp);
  // }

}
