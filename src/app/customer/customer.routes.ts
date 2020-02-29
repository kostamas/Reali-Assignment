import {Routes} from '@angular/router';
import {EditCustomerComponent} from './edit-customer/edit-customer.component';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CUSTOMER_VIEWS} from './customer.const';

export const customerRoutes: Routes = [
  {path: 'customers', component: CustomerListComponent},
  {path: 'create-customer', component: EditCustomerComponent, data: {type: CUSTOMER_VIEWS.create}},
  {path: 'edit-customer/:id', component: EditCustomerComponent, data: {type: CUSTOMER_VIEWS.edit}},
  { path: '**', redirectTo: 'customers', pathMatch: 'full' }
];
