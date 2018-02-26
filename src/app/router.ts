import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Authguard } from './prosesData/authguard';

export const navRoute:Routes = [
    {path: '', component:LoginComponent},
    {path: 'dashboard', component:DashboardComponent , canActivate:[Authguard]}
]
