import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRouting} from './app.routing';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AkitaNgDevtools} from '@datorama/akita-ngdevtools';
import {environment} from '@env/environment';
import {HttpClientModule} from '@angular/common/http';
import {UiNotificationModule} from "@app/ui/ui-notification/ui-notification.module";
import {KitOverlayModule} from "@ngx-kit/core";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouting,
    RouterModule,
    HttpClientModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    UiNotificationModule.forRoot(),
    KitOverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
