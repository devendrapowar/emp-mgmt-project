import { Pipe, PipeTransform } from '@angular/core';
import {Emp} from './employee';
@Pipe({
  name: 'searchEmp'
})
export class SearchEmpPipe implements PipeTransform {

  transform(items: Emp[], searchText: string): Emp[] {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();

    return items.filter( it => {
      return it.name.toLowerCase().includes(searchText) || it.address.city.toLowerCase().includes(searchText);
    });
   }
}
