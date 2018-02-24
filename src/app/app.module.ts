import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { navRoute } from './router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(navRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
