import { Http, HttpModule } from '@angular/http';
import { NytService } from './nyt.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export function nytfactory(http: Http){
  return new NytService(http, 'https://api.nytimes.com/svc/topstories/v2/');
}

@NgModule({
  imports: [CommonModule, HttpModule],
  providers: [{provide: NytService, useFactory: nytfactory, deps: [Http]}],
  declarations: []
})

export class NytModule { }
