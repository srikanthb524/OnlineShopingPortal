import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { ProductAddEditComponent } from './product-add-edit/product-add-edit.component';


@NgModule({
  declarations: [
    ProductComponent,
    ProductDisplayComponent,
    ProductAddEditComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
