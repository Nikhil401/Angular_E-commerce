import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import the components for navigation/routing purpose
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { LaptopComponent } from './laptop/laptop.component';
import { LaptopdealsComponent } from './laptop/laptopdeals/laptopdeals.component';
import { MobileComponent } from './mobile/mobile.component';
import { MobiledealsComponent } from './mobile/mobiledeals/mobiledeals.component';
import { TabletComponent } from './tablet/tablet.component';
import { TabletdealsComponent } from './tablet/tabletdeals/tabletdeals.component';
import { OffersComponent } from './offers/offers.component';
import { OffersdealsComponent } from './offers/offersdeals/offersdeals.component';
import { ContactComponent } from './contact/contact.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { AdminComponent } from './admin/admin.component';
//Configure the routing path for the above imported components
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'cards',component:CardsComponent},
  {path:'lap', component:LaptopComponent},
  {path:'laptop', component:LaptopdealsComponent},
  {path: 'mob', component:MobileComponent},
  {path: 'mobile', component:MobiledealsComponent},
  {path: 'tab', component:TabletComponent},
  {path: 'tablet',component:TabletdealsComponent},
  {path: 'offer',component:OffersComponent},
  {path: 'offers',component:OffersdealsComponent},
  {path: 'contact',component:ContactComponent},
  {path: 'product_details',component:ProductdetailsComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: 'cartitem', component:CartItemsComponent},
  {path: 'admin', component:AdminComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
