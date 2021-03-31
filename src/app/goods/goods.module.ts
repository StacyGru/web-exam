import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { GoodsRoutingModule } from './goods-routing.module';
import { GoodsComponent } from './goods.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryNamePipe } from 'src/app/shared/pipes/category-name.pipe';
import { SortPipe } from 'src/app/shared/pipes/sort.pipe';

@NgModule({
  declarations: [
      GoodsComponent,
      ListComponent,
      EditComponent,
      CategoryNamePipe,
      SortPipe
    ],
  imports: [
      CommonModule, 
      GoodsRoutingModule, 
      FormsModule, 
      HttpClientModule,
      ReactiveFormsModule
    ],
})
export class GoodsModule {}