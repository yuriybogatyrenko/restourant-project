import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GanttTimelineChartComponent} from "@app/restaurant/gantt-timeline-chart/gantt-timeline-chart.component";


const routes: Routes = [
  // {path: '', loadChildren: './dashboard/dashboard.module#DashboardModule'},
  {path: '', component: GanttTimelineChartComponent},
  {path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
  {path: 'plan', loadChildren: './restaurant-plan/restaurant-plan.module#RestaurantPlanModule'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRouting {
}
