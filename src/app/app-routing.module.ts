import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
    data: {title: 'Categories'}
  },
  {
    path: 'products',
    component: ProductComponent,
    data: {title: 'Products'}
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
