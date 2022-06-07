import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceDashboardComponent } from './service/service-dashboard/service-dashboard.component';

const routes: Routes = [
  { path: '', component: ServiceDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
