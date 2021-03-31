import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(goods, sortby: string, reverse:boolean): any[]
  {
    if (sortby === 'byprice')
    {
      goods.sort((a, b ) => a.price - b.price);
    }
    else if (sortby === 'byamount')
    {
      goods.sort((a, b ) => a.amount - b.amount);
    }
    if (reverse) 
    {
      goods.reverse()
    }
      return goods;
  }

}
