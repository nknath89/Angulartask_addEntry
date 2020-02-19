import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amount'
})
export class AmountPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.currency + (value.amount/100).toFixed(2);
  }

}
