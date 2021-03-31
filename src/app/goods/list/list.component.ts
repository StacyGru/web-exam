import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyGoods } from 'src/app/shared/goods.model';
import { HttpGoodsService } from 'src/app/shared/services/http-goods.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  goods: MyGoods[];
  column = "byprice";
  reverse = false;
  avaliable = false;
  category_filter: undefined;
  
  constructor(
    private HttpGoodsService: HttpGoodsService, 
    private router: Router
    ) { }

  ngOnInit(): void 
  {
    this.getData();
  }

  async getData() 
  {
    try 
    {
      let goods = this.HttpGoodsService.getAll();
      this.goods = (await goods === null)||(await goods === undefined) 
        ? [] 
        : await goods;
    } 
    catch (err) 
    {
      console.error(err);
    }

    try 
    {
      this.goods = await this.HttpGoodsService.getAll();
    } 
    catch (err) 
    {
      console.log(err);
    }
  }

  onLinkProfile(id: number) 
  {
    this.router.navigate([this.router.url, 'profile', id]);
  }

  onAddProfile() 
  {
    this.router.navigate([this.router.url, 'profile']);
  }

  async onDelete(id: number) 
  {
    try 
    {
      await this.HttpGoodsService.deleteOneById(id);
    } 
    catch (err) 
    {
      console.error(err);
    }
    this.getData();
  }

}
