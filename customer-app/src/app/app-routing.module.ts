import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrdersModule} from './orders/orders.module';
import {CustomersModule} from './customers/customers.module';

const routes: Routes = [
  {
    path: 'customers',
    loadChildren:'./customers/customers.module#CustomersModule'
  },
  {
    path: 'orders',
    loadChildren: './orders/orders.module#OrdersModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
