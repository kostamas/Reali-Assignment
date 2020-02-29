import {Component, OnInit} from '@angular/core';
import {ICustomer} from '../../../customer';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  public customers$: Observable<ICustomer[]>;

  constructor(private store: Store<{ customers: ICustomer[] }>) {
  }

  ngOnInit() {
    this.customers$ = this.store.pipe(select('customers'));
  }

  trackByFn(index: number, item: ICustomer) {
    return item.id;
  };
}
