import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'node_modules/chart.js/src/chart.js';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { CurrentWeaterComponent } from './current-weater/current-weater.component';
import { ForecastComponent } from './forecast/forecast.component';
import { TabsComponent } from './tabs/tabs.component';
import { MainComponent } from './main/main.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    CurrentWeaterComponent,
    ForecastComponent,
    TabsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
