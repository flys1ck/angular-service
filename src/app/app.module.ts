import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServiceDashboardModule } from './service-dashboard/service-dashboard.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ServiceDashboardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
