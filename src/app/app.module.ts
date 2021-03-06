import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/home/layout/layout.component';
import { AppHeaderComponent } from './components/home/layout/app-header/app-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { FiltersComponent } from './components/home/filters/filters.component';
import { ProductListComponent } from './components/home/product-list/product-list.component';
import { ProductCardComponent } from './components/home/product-list/product-card/product-card.component';
import { PaginationComponent } from './components/home/shared/pagination/pagination.component';
import { AddToCartComponent } from './components/home/shared/add-to-cart/add-to-cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule, NgbToastModule} from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { NgxPayPalModule } from 'ngx-paypal';
import { ShoppingCartComponent } from './components/home/shopping-cart/shopping-cart.component';
import { SmallCartComponent } from './components/home/layout/app-header/small-cart/small-cart.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CheckoutNavbarComponent } from './components/checkout/checkout-navbar/checkout-navbar.component';
import { CustomerInfoComponent } from './components/checkout/customer-info/customer-info.component';
import { PaymentInfoComponent } from './components/checkout/payment-info/payment-info.component';
import { ReviewComponent } from './components/checkout/review/review.component';
import { PaypalCheckoutComponent } from './components/checkout/payment-info/paypal-checkout/paypal-checkout.component';
import { AccountComponent } from './components/account/account.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AppHeaderComponent,
    HomeComponent,
    FiltersComponent,
    ProductListComponent,
    ProductCardComponent,
    PaginationComponent,
    AddToCartComponent,
    ShoppingCartComponent,
    SmallCartComponent,
    LoginComponent,
    RegisterComponent,
    ProductDetailsComponent,
    CheckoutComponent,
    CheckoutNavbarComponent,
    CustomerInfoComponent,
    PaymentInfoComponent,
    ReviewComponent,
    PaypalCheckoutComponent,
    AccountComponent,
    OrderConfirmationComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbToastModule,
    ToastrModule.forRoot(),
    NgxPayPalModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
