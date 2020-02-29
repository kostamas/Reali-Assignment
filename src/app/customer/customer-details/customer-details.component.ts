import {Component, Input, OnInit} from '@angular/core';
import {ICustomer} from '../../../customer';
import {CustomerService} from '../customer.service';
import {deleteCustomer} from '../../ngrx/actions/customer.action';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  @Input() customer: ICustomer;

  constructor(private customerService: CustomerService, private store: Store<{ customers: ICustomer[] }>) {
  }

  ngOnInit() {
  }

  delete() {
    this.store.dispatch(deleteCustomer({id: this.customer.id}));
  }
}
