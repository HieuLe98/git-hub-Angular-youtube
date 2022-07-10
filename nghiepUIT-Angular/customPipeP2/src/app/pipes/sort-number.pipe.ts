import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortNumber'
})
export class SortNumberPipe implements PipeTransform {

  transform(arrNumber: number[], sortValue: number): any {
    var result = arrNumber.sort((a, b) => {
      if( a > b ) return sortValue;
      else if( a < b ) return -sortValue;
      else return 0;
    });



    return [...result];
  }

}
