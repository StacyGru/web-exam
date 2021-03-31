import { Component, OnInit } from '@angular/core';
import { MyGoods, MyGoodsCategory } from 'src/app/shared/goods.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpGoodsService } from 'src/app/shared/services/http-goods.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  good: MyGoods;
  MyGoodsCategory = MyGoodsCategory;
  EditForm : FormGroup;

  constructor(
    private activatedRouter: ActivatedRoute,
    private HttpGoodsService: HttpGoodsService,
    private router: Router
  ) 
  {
    this.activatedRouter.params.subscribe((param) => 
    {
      this.id = param.id;
    });
  }

  ngOnInit(): void
  {
    this.EditForm = new FormGroup({
      article: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      category: new FormControl(0, [Validators.required]),
      weight: new FormControl(null, [Validators.required]),
      amount: new FormControl(0, [Validators.required]),
      manufacturer: new FormControl(null, [Validators.required])
    });
    this.getData();
  }

  async getData() {
    if ((this.id !== null)&&(this.id !== undefined)) 
    {
      try 
      {
        let good = this.HttpGoodsService.getOneById(this.id);
        this.good = await good;
      } catch (err) 
      {
        console.error(err);
      }
      this.EditForm.patchValue({
        article: this.good.article,
        name: this.good.name,
        price: this.good.price,
        category: this.good.category,
        weight: this.good.weight,
        amount: this.good.amount,
        manufacturer: this.good.manufacturer
      });
    }
  }

  async onSave() 
  {
    if ((this.id !== null)&&(this.id !== undefined)) 
    {
      try 
      {
        await this.HttpGoodsService.putOneById(this.id, this.EditForm.value);
      } catch (err) 
      {
        console.error(err);
      }
    } 
    else 
    {
      try 
      {
        let res = await this.HttpGoodsService.postOne(this.EditForm.value);
        this.router.navigate([this.router.url, res.id]);
        this.getData();
      } 
      catch (err) 
      {
        console.error(err);
      }
    }
  }

  async onDelete() 
  {
    try 
    {
      await this.HttpGoodsService.deleteOneById(this.id);
    } catch (err) 
    {
      console.error(err);
    }
    this.router.navigate(['/goods']);
  }

}
