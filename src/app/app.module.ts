import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'node_modules/chart.js/src/chart.js';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { ForecastComponent } from './forecast/forecast.component';
import { ChartComponent } from './chart/chart.component';
import { MainComponent } from './main/main.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    CurrentWeatherComponent,
    ForecastComponent,
    ChartComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule
],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
