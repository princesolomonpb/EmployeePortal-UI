import { Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authguardGuard } from './guards/authguard.guard';

export const routes: Routes = [
    {path: '', component:SignupComponent},
    {path: 'login', component:LoginComponent},
    {path:'dashboard',component:DashboardComponent,canActivate:[authguardGuard]}
];
