import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TecharticlesComponent } from './views/techarticles/techarticles.component';

@NgModule({
  declarations: [
    AppComponent,
    TecharticlesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
