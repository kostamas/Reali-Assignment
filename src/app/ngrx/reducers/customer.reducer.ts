import {createReducer, on} from '@ngrx/store';
import {addCustomer, editCustomer, deleteCustomer} from '../actions/customer.action';
import {appState} from '../appState';
import {ICustomer} from '../../../customer';

const onEditCustomer = (state: ICustomer[], action) => {
  const customerToEdit = state.find(customer => customer.id === action.customer.id);
  Object.keys(customerToEdit).forEach(key => customerToEdit[key] = action.customer[key]);
  return [...state];
};

const customerReducerHandler = createReducer(appState,
  on(addCustomer, (state: ICustomer[], action) => [...state, action.customer]),
  on(deleteCustomer, (state: ICustomer[], action) => state.filter(customer => customer.id !== action.id)),
  on(editCustomer, onEditCustomer)
);

export function customerReducer(state, action) {
  return customerReducerHandler(state, action);
}
