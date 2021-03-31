import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { GoodsComponent } from './goods.component';

const routes: Routes = [
  {
    path: '',
    component: GoodsComponent,
    children: [
      {
        path: '',
        component: ListComponent,
      },
      {
        path: 'profile',
        component: EditComponent,
      },
      {
        path: 'profile/:id',
        component: EditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoodsRoutingModule {}