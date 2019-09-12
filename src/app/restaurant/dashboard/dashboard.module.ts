import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRouting} from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRouting
  ]
})
export class DashboardModule {
}
