import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})

export class PhoneFormatPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    console.log(args);

    if (args === 'inr') {
      return `+91 ${value.substring(0, 5)} - ${value.substring(5, 10)}`;
    } else if (args === 'usd') {
      return `+1 (${value.substring(0, 3)}) (${value.substring(3, 6)}) - ${value.substring(6, 10)}`;
    }
    return '(' + value.slice(0, 3) + ')' + ' ' + value.slice(3, 6);
  }
}
