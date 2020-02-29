import {createAction, props} from '@ngrx/store';
import {ICustomer} from '../../../customer';

export const addCustomer = createAction('[Customer] Add Customer', props<{ customer: ICustomer }>());
export const editCustomer = createAction('[Customer] Edit Customer', props<{ customer: ICustomer }>());
export const deleteCustomer = createAction('[Customer] Delete Customer', props<{ id: string }>());

