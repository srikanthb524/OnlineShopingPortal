import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { CategoryDisplayComponent } from './category-display/category-display.component';
import { CategoryAddEditComponent } from './category-add-edit/category-add-edit.component';


@NgModule({
  declarations: [
    CategoryComponent,
    CategoryDisplayComponent,
    CategoryAddEditComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
