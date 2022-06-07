import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServiceModule } from './service/service.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ServiceModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
