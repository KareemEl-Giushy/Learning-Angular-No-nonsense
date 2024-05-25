import { Pipe, PipeTransform } from '@angular/core';

import { Product } from './product';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {

  transform(value: Product[], ...args: unknown[]): Product[] {
    if(value.length !== 0) {
      return value.sort((a: Product, b: Product) => {
        if(a.name < b.name) {
          return -1;
        } else if (a.name > b.name) {
          return 1;
        }

        return 0;
      });
    }

    return [];
  }

}
