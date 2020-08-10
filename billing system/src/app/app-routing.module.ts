import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TablelayoutComponent} from './tablelayout/tablelayout.component';
import {AddcustomerComponent} from './addcustomer/addcustomer.component';
import {DepartmentsectionComponent} from './departmentsection/departmentsection.component';
import {MainposComponent} from './mainpos/mainpos.component';
import {OtheractionComponent} from './otheraction/otheraction.component';
import{PaymentComponent} from './payment/payment.component'
import{MergebillComponent} from './otheraction/mergebill/mergebill.component';
import{RefundbillComponent} from './otheraction/refundbill/refundbill.component';
import{PizzaToppingsSelectionComponent} from './mainpos/pizza-toppings-selection/pizza-toppings-selection.component'
import{StatusComponent} from './payment/status/status.component'



const menu:Routes=[
  {path:'tablelayout',component:TablelayoutComponent
}, {path:'addcustomer',component:AddcustomerComponent
}, {path:'depart',component:DepartmentsectionComponent
}, {path:'mpos',component:MainposComponent
}, {path:'otheraction',component:OtheractionComponent
}, {path:'payement',component:PaymentComponent
}, {path:'merge',component:MergebillComponent
}, {path:'refund',component:RefundbillComponent
},{path:'section',component:PizzaToppingsSelectionComponent
},{path:'status',component:StatusComponent
}

 
]

@NgModule({
  imports: [RouterModule.forRoot(menu)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
