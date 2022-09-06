import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiLibraryModule } from 'ui-library';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, UiLibraryModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
