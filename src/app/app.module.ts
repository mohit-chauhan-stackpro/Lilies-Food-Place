import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { SideNavComponent } from './side-nav/side-nav.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderComponent } from './order/order.component';
import { DashFoodItemComponent } from './dashboard/dash-food-item/dash-food-item.component';
import { FoodItemService } from './dashboard/dash-food-item/food-item.service';
import { FoodItemDetailComponent } from './food-item-detail/food-item-detail.component';
import { CartItemsComponent } from './cart/cart-items/cart-items.component';
import { OrderItemComponent } from './order/order-item/order-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpPageComponent,
    LoginPageComponent,
    DashboardComponent,
    SideNavComponent,
    CartComponent,
    CheckoutComponent,
    OrderComponent,
    DashFoodItemComponent,
    FoodItemDetailComponent,
    CartItemsComponent,
    OrderItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [FoodItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
