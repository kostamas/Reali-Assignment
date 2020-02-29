import {Injectable} from '@angular/core';
import {ICustomer} from '../../customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor() {
  }

  createCustomerId(): string {
    const S4 = () => {
      // tslint:disable-next-line:no-bitwise
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4());
  }
}
