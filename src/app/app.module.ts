import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { DataGridModule, PanelModule, DialogModule } from 'primeng/primeng';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PhoneFormatPipe } from './pipe/format.pipe';
import { NumbersOnlyDirective } from './directive/numberOnly.directive';
import { RestrictedInputDirective } from './directive/restrictinput.directive';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { RegisterComponent } from './register/register.component';
import { ProductComponent } from './product/product.component';

import { DataService } from './services/data.service';
import { CartComponent } from './cart/cart.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { LoginComponent } from './login/login.component';
import { ProductgridComponent } from './productgrid/productgrid.component';
import { DatepickerDirective } from './datepicker.directive';

const routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'products', component: ProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'productsgrid', component: ProductgridComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    RegisterComponent,
    ProductComponent,
    CartComponent,
    DropdownComponent,
    LoginComponent,
    ProductgridComponent,
    PhoneFormatPipe,
    NumbersOnlyDirective,
    RestrictedInputDirective,
    DatepickerDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    DataGridModule,
    PanelModule,
    DialogModule,
    NoopAnimationsModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
