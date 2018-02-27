import { StatisticComponent } from './statistic/statistic.component';
import { ScoreComponent } from './score/score.component';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StationComponent } from './station/station.component';
import { TambahkelComponent } from './tambahkel/tambahkel.component';

export const navRoute:Routes = [
    {path: '', component:LoginComponent},
    {
        path: 'dashboard', component:DashboardComponent, 
        children: [
            {path: '', component:ScoreComponent},
            {path: 'station', component:StationComponent},
            {path: 'statistic', component:StatisticComponent},
            {path: 'addKelompok', component:TambahkelComponent}
        ]
    }
]
