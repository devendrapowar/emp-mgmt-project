import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import {Emp} from './employee';
@Injectable()
export class EmployeeService {
  private employeesUrl = '../assets/data.json'; 
  constructor(private http: HttpClient) { }
  getEmployees(): Observable<Emp[]> {
    return  this.http.get<Emp[]>(this.employeesUrl);
  }

  // getEmployee(id: number): Observable<Emp> {
  //   console.lo
  //   return  this.http.get<Emp>(this.employeesUrl).find(emp => emp.id === id);
  // }
}
