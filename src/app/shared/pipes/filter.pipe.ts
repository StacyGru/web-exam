import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(goods, avaliable): any[]
  {
    if (avaliable)
    {
      let filteredItems = goods.filter(good => good.amount > 0);
      return filteredItems;
    }
    else
    {
      return goods;
    }
  }

}
