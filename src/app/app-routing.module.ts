import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'User', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }, { path: 'Product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) }, { path: 'Category', loadChildren: () => import('./category/category.module').then(m => m.CategoryModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
