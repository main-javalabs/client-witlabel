import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';

const routes: Routes = [
  {path:'',
  children:[
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'ForgotPassword',component:ForgotPasswordComponent},
    {path:'logout',component:LogoutComponent},
    {path:'ResetPassword',component:ResetPasswordComponent},
    {
      path:'**',
      redirectTo:'login'
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
