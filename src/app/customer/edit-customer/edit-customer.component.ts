import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {CUSTOMER_VIEWS} from '../customer.const';
import {CustomerService} from '../customer.service';
import {ICustomer} from '../../../types/customer';
import {select, Store} from '@ngrx/store';
import {getCustomerById} from '../../ngrx/selectors/customer.selector';
import {addCustomer, editCustomer} from '../../ngrx/actions/customer.action';
import {take} from "rxjs/operators";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {
  public viewType = '';
  public customerForm;
  public CUSTOMER_VIEWS = CUSTOMER_VIEWS;
  private customerToEdit: ICustomer;
  private formControlsName = ['firstName', 'lastName', 'age', 'address', 'phone'];

  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder, private router: Router,
              private customerService: CustomerService, private store: Store<{ customers: ICustomer[] }>) {
    this.customerForm = fb.group({
      firstName: fb.control('', [Validators.required, Validators.maxLength(30)]),
      lastName: fb.control('', [Validators.required, Validators.maxLength(30)]),
      phone: fb.control('', [Validators.maxLength(20)]),
      age: fb.control('', [Validators.maxLength(3)]),
      address: fb.control('', [Validators.maxLength(20)]),
    });
  }

  ngOnInit() {
    this.activatedRoute.data.pipe(take(1)).subscribe(data => this.viewType = data && data.type);
    this.activatedRoute.params.pipe(take(1)).subscribe(params => {
      if (params.id) {
        this.store.pipe(take(1), select(getCustomerById(params.id))).subscribe(customer => {
          if (customer) {
            this.customerToEdit = customer;
            this.updateFormByCustomer(customer);
          } else {
            this.router.navigate(['/create-customer']);
          }
        });
      }
    });
  }

  updateFormByCustomer(customer: ICustomer) {
    this.customerToEdit = customer;
    this.formControlsName.forEach(controlName => {
      this.customerForm.controls[controlName].setValue(customer[controlName]);
    });
  }

  numbersOnly($event: KeyboardEvent) {
    const charCode = $event.which ? $event.which : $event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }

  cancel() {
    if (this.customerToEdit) {
      this.updateFormByCustomer(this.customerToEdit);
    } else {
      this.updateFormByCustomer({firstName: '', lastName: '', age: null, address: '', phone: null});
    }
  }

  submit() {
    if (this.customerForm.status === 'VALID') {
      const customer: ICustomer = {} as ICustomer;
      this.formControlsName.forEach(controlName => {
        customer[controlName] = this.customerForm.get(controlName).value;
      });

      if (this.viewType === CUSTOMER_VIEWS.edit) {
        customer.id = this.customerToEdit.id;
        this.store.dispatch(editCustomer({customer}));
      }

      if (this.viewType === CUSTOMER_VIEWS.create) {
        customer.id = this.customerService.createCustomerId();
        this.store.dispatch(addCustomer({customer}));
      }

      this.router.navigate(['/customers']);
    }
  }
}
