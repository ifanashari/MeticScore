import { StatisticComponent } from './statistic/statistic.component';
import { ScoreComponent } from './score/score.component';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StationComponent } from './station/station.component';
import { TambahkelComponent } from './tambahkel/tambahkel.component';
import { AbsensiComponent } from './absensi/absensi.component';
import { Authguard } from './prosesData/authguard';
import { BonusComponent } from './bonus/bonus.component';
import { RankingComponent } from './ranking/ranking.component';
import { BlockedComponent } from './blocked/blocked.component';

export const navRoute:Routes = [
    {path: '', component:LoginComponent},
    {
        path: 'dashboard', component:DashboardComponent, canActivate:[Authguard],
        children: [
            {path: '', component:StationComponent},
            {path: 'score', component:ScoreComponent},
            {path: 'bonus', component:BonusComponent},
            {path: 'statistic', component:StatisticComponent},
            {path: 'addKelompok', component:TambahkelComponent},
            {path: 'Absensi', component:AbsensiComponent}
        ]
    },
    {path: 'ranking', component:RankingComponent},
    {path: 'blocked', component:BlockedComponent}
]
