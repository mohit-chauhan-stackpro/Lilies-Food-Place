import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { SignUpPageComponent } from "./sign-up-page/sign-up-page.component";

const appRoutes:Routes=[
  {path:'',redirectTo:'/signup',pathMatch:'full'},
  {path:'signup',component:SignUpPageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'dashboard',component:DashboardComponent}
]

@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})

export class AppRoutingModule{

}
