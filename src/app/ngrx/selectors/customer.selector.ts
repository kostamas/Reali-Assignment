import {createSelector} from '@ngrx/store';
import {ICustomer} from '../../../types/customer';

export const customers = (state: { customers: ICustomer[] }) => state;

export const getCustomerById = (id) => createSelector(customers, (customersState) => {
  return customersState.customers.find(item => item.id === id);
});
