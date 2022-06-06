import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceDashboardComponent } from './service-dashboard/service-dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [{ path: '', component: ServiceDashboardComponent }];

@NgModule({
  declarations: [ServiceDashboardComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  exports: [ServiceDashboardComponent],
})
export class ServiceDashboardModule {}
