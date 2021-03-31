import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter2'
})
export class Filter2Pipe implements PipeTransform {

  transform(goods, category_filter): any[]
  {
    if (category_filter)
    {
      let filteredItems = goods.filter(good => good.category == category_filter);
      return filteredItems;
    }
    else
    {
      return goods;
    }
  }

}
