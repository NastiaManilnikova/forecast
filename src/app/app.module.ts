import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { CurrentWeaterComponent } from './current-weater/current-weater.component';
import { ForecastComponent } from './forecast/forecast.component';
import { TabsComponent } from './tabs/tabs.component';
//import { ForecastLoaderService } from './forecast-loader.service';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    CurrentWeaterComponent,
    ForecastComponent,
    TabsComponent,
    //ForecastLoaderService,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    //ForecastLoaderService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
