import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewfoodComponent } from './viewfood/viewfood.component';
import { SearchfoodComponent } from './searchfood/searchfood.component';
import { PaymentComponent } from './payment/payment.component';
import { LoggingComponent } from './logging/logging.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewfoodComponent,
    SearchfoodComponent,
    PaymentComponent,
    LoggingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
