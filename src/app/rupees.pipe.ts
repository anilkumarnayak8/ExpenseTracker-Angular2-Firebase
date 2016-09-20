import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rupees'
})
export class RupeesPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    return `Rs. ${value}.00 `;
  }

}
