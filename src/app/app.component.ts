import { Component } from '@angular/core';
import { MyGoods, MyGoodsCategory } from './shared/goods.model';
import { HttpGoodsService } from './shared/services/http-goods.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Список товаров';
  goods: MyGoods[];
  MyGoodsCategory = MyGoodsCategory;
  edit = false;
  goodsData =
  {
    id: 0,
    name: '',
    price: '',
    category: 1,
    weight: '',
    amount: ''
  };
  // searchStr = '';

  constructor(
    private httpProductService: HttpGoodsService,
    private router: Router) {}

  ngOnInit()
  {
    this.getData();
  }

  async getData() 
  {
    try 
    {
      let goods = this.httpProductService.getAll();
      this.goods = (await goods === null)||(await goods === undefined) 
        ? [] 
        : await goods;
    }
    catch(err) 
    {
      console.log(err);
    }

    try 
    {
      this.goods = await this.httpProductService.getAll();
    } 
    catch (err) 
    {
      console.log(err);
    }
  }

  async onAddGood(good: MyGoods) 
  {
    try 
    {
      let id =
        this.goods.length > 0
          ? this.goods[this.goods.length - 1].id + 1
          : 0;
      good.id = id;
      await this.httpProductService.postOne(good);
    }
    catch(err)
    {
      console.error(err);
    }
    finally
    {
      this.getData();
    }
  }

  async onEditGood(good)
  {
    try
    {
      await this.httpProductService.putOneById(good.id, good);
    }
    catch(err)
    {
      console.error(err);
    }
    finally
    {
      this.edit = false;
      this.getData();
    }
  }

  async onDeleteById(id: number)
  {
    try
    {
      await this.httpProductService.deleteOneById(id);
    }
    catch(err)
    {
      console.error(err);
    }
    finally
    {
      this.getData();
    }
  }

  // getByType(category: number)
  // {
  //   return this.goods.filter((good) => good.category === category);
  // }

  onEditById(id: number)
  {
    let index = this.goods.findIndex((good) => good.id === id);
    this.goodsData = 
    {
      id: this.goods[index].id,
      name: this.goods[index].name,
      price: this.goods[index].price,
      category: this.goods[index].category,
      weight: this.goods[index].weight,
      amount: this.goods[index].amount
    }
    this.edit = true;
  }

  onCancelEdit()
  {
    this.edit = false;
  }
}
