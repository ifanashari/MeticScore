import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { navRoute } from './router';
import { AuthService } from './prosesData/auth.service';
import { Authguard } from './prosesData/authguard';
import { ScoreComponent } from './score/score.component';
import { StationComponent } from './station/station.component';
import { StatisticComponent } from './statistic/statistic.component';

let firebaseConfigHere = {
  apiKey: "AIzaSyABaNXO2lyzikOP6PCgpoaWrVKk_C8T7BM",
  authDomain: "meticscore.firebaseapp.com",
  databaseURL: "https://meticscore.firebaseio.com",
  projectId: "meticscore",
  storageBucket: "meticscore.appspot.com",
  messagingSenderId: "497952607161"
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    ScoreComponent,
    StationComponent,
    StatisticComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(navRoute),AngularFireModule.initializeApp(firebaseConfigHere),
    AngularFireDatabaseModule,AngularFireAuthModule,
    ReactiveFormsModule, FormsModule, ToastrModule.forRoot(),
    BrowserAnimationsModule, AngularFirestoreModule
  ],
  providers: [AuthService , Authguard],
  bootstrap: [AppComponent]
})
export class AppModule { }

//Copyright by metic developers