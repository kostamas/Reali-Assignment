import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditCustomerComponent} from './edit-customer/edit-customer.component';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerDetailsComponent} from './customer-details/customer-details.component';
import {RouterModule} from '@angular/router';
import {customerRoutes} from './customer.routes';
import {MatInputModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    CustomerDetailsComponent,
    EditCustomerComponent,
    CustomerListComponent
  ],
  imports: [
    RouterModule.forChild(customerRoutes),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule
  ]
})
export class CustomerModule {
}
