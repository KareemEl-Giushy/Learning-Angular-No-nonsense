import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): boolean {
    if(value <= 5){
      return true;
    }else {
      return false;
    }
  }

}
