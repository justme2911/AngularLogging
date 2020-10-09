import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule } from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import 'hammerjs';
import { WeatherComponent } from './weather/weather.component';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule, 
    LoggerModule.forRoot({
      serverLoggingUrl: 'http://localhost:8080/api/logs',
      level: NgxLoggerLevel.TRACE,
      serverLogLevel: NgxLoggerLevel.DEBUG,
      disableConsoleLogging: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
