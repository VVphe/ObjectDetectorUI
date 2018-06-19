import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { HttpService } from './http-service.service'

import { AppComponent } from './app.component';
import { DetectComponent } from './detect/detect.component';

@NgModule({
  declarations: [
    AppComponent,
    DetectComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    HttpModule
  ],
  providers: [ HttpService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
