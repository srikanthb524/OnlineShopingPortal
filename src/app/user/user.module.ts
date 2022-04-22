import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerSignupComponent } from './customer-signup/customer-signup.component';
import { SupplierSignupComponent } from './supplier-signup/supplier-signup.component';
import { SupplierLoginComponent } from './supplier-login/supplier-login.component';


@NgModule({
  declarations: [
    UserComponent,
    CustomerLoginComponent,
    CustomerSignupComponent,
    SupplierSignupComponent,
    SupplierLoginComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
