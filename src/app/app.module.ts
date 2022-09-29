;
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//accessing ngModel for 2-way binding
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { RefrigeratorComponent } from './refrigerator/refrigerator.component';
import { WashingmachineComponent } from './washingmachine/washingmachine.component';
import { MicroovenComponent } from './microoven/microoven.component';
import { LaptopComponent } from './laptop/laptop.component';
import { LaptopdealsComponent } from './laptop/laptopdeals/laptopdeals.component';
import { CounterComponent } from './counter/counter.component';
import { CounterchildComponent } from './counter/counterchild/counterchild.component';
import { MobileComponent } from './mobile/mobile.component';
import { MobiledealsComponent } from './mobile/mobiledeals/mobiledeals.component';
import { TabletComponent } from './tablet/tablet.component';
import { TabletdealsComponent } from './tablet/tabletdeals/tabletdeals.component';
import { OffersComponent } from './offers/offers.component';
import { OffersdealsComponent } from './offers/offersdeals/offersdeals.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { ContactComponent } from './contact/contact.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CardsComponent,
    SearchComponent,
    FooterComponent,
    RefrigeratorComponent,
    WashingmachineComponent,
    MicroovenComponent,
    LaptopComponent,
    LaptopdealsComponent,
    CounterComponent,
    CounterchildComponent,
    MobileComponent,
    MobiledealsComponent,
    TabletComponent,
    TabletdealsComponent,
    OffersComponent,
    OffersdealsComponent,
    AllproductsComponent,
    AdvertisementComponent,
    ContactComponent,
    ProductdetailsComponent,
    RegisterComponent,
    LoginComponent,
    CartItemsComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
