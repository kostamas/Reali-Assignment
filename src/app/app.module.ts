import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RealiHeaderComponent } from './reali-header/reali-header.component';
import {CustomerModule} from './customer/customer.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import {customerReducer} from './ngrx/reducers/customer.reducer';

@NgModule({
  declarations: [
    AppComponent,
    RealiHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ customers: customerReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
