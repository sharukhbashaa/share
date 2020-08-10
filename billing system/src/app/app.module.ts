import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TablelayoutComponent } from './tablelayout/tablelayout.component';
import { DepartmentsectionComponent } from './departmentsection/departmentsection.component';
import { OtheractionComponent } from './otheraction/otheraction.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { MainposComponent } from './mainpos/mainpos.component';
import { PaymentComponent } from './payment/payment.component';
import { MergebillComponent } from './otheraction/mergebill/mergebill.component';
import { RefundbillComponent } from './otheraction/refundbill/refundbill.component';
import { PizzaToppingsSelectionComponent } from './mainpos/pizza-toppings-selection/pizza-toppings-selection.component';
import { FormsModule } from '@angular/forms';
import { StatusComponent } from './payment/status/status.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TablelayoutComponent,
    DepartmentsectionComponent,
    OtheractionComponent,
    AddcustomerComponent,
    MainposComponent,
    PaymentComponent,
    MergebillComponent,
    RefundbillComponent,
    PizzaToppingsSelectionComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
