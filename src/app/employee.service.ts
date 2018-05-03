import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {Emp} from './employee';
export const EMPS: Emp[] = [
  {
    "id": 1,
    "name": "Jhon",
    "phone": 9999999999,
    "address":
      {
      "city": "Pune",
      "address_line1":"ABC road",
      "address_line2":"XYZ building",
      "postal_code":12345
      }
  },
  {
    "id": 2,
    "name": "Jhon",
    "phone": 9999999999,
    "address":
      {
      "city": "Pune",
      "address_line1":"ABC road",
      "address_line2":"XYZ building",
      "postal_code":12345
      }
  },
  {
    "id": 3,
    "name": "Jhon",
    "phone": 9999999999,
    "address":
      {
      "city": "Pune",
      "address_line1":"ABC road",
      "address_line2":"XYZ building",
      "postal_code":12345
      }
  },
  {
    "id": 4,
    "name": "Jhon",
    "phone": 9999999999,
    "address":
      {
      "city": "Pune",
      "address_line1":"ABC road",
      "address_line2":"XYZ building",
      "postal_code":12345
      }
  },
  {
    "id": 5,
    "name": "Jhon",
    "phone": 9999999999,
    "address":
      {
      "city": "Pune",
      "address_line1":"ABC road",
      "address_line2":"XYZ building",
      "postal_code":12345
      }
  },
  {
    "id": 6,
    "name": "Jhon",
    "phone": 9999999999,
    "address":
      {
      "city": "Pune",
      "address_line1":"ABC road",
      "address_line2":"XYZ building",
      "postal_code":12345
      }
  }
];
@Injectable()
export class EmployeeService {

  constructor() { }
  getEmployees(): Observable<Emp[]> {
    return of(EMPS);
  }

}
