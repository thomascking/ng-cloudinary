import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgCloudinaryModule } from 'projects/ng-cloudinary/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCloudinaryModule.forRoot({cloudName: 'dog9m708i'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
