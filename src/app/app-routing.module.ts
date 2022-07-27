import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FoodItemDetailComponent } from './food-item-detail/food-item-detail.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { OrderComponent } from './order/order.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';

const appRoutes: Routes = [
  { path: 'signup', component: SignUpPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cart', component: CartComponent },
  { path: 'orders', component: OrderComponent },
  { path: 'addtocart', component: FoodItemDetailComponent },

  { path: '', redirectTo: '/signup', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
