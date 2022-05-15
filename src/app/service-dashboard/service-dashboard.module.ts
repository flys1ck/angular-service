import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceDashboardComponent } from './service-dashboard/service-dashboard.component';



@NgModule({
  declarations: [
    ServiceDashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ServiceDashboardComponent
  ]
})
export class ServiceDashboardModule { }
