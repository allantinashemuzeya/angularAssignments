import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app-assets/app.component';

import { HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './components/weather/weather.component'
import { ReactiveFormsModule } from '@angular/forms';
import { FriendsComponent } from './components/friends/friends.component'

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    FriendsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
