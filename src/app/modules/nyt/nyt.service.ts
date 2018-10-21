import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NytService {

  baseUri: string;

  private headers = new Headers({
    //'Content-Type': 'application/json'
    'Accept': 'application/json',
    //'Access-Control-Allow-Headers': 'Accept, Content-Type,',
    'Accept-Language': 'en-US'
  });

  constructor(private http: Http, baseAPIUri: string) {
    this.baseUri = baseAPIUri;
  }


  getTopArticles = () => this.http.get(
    this.baseUri + 'home.json?api_key=59c2f98774d24c8fa26ffe6b85e6afed',
    { headers: this.headers }).pipe(map(response => {
      const x = response.json();
      return x;
  }))

  getTechArticles = () => this.http.get(
    this.baseUri + 'technology.json?api_key=59c2f98774d24c8fa26ffe6b85e6afed',
    { headers: this.headers }).pipe(map(response => {
      const x = response.json();
      return x;
  }))

  getScienceArticles = () => this.http.get(
    this.baseUri + 'science.json?api_key=59c2f98774d24c8fa26ffe6b85e6afed',
    { headers: this.headers }).pipe(map(response => {
      const x = response.json();
      return x;
    }))


//https://api.nytimes.com/svc/topstories/v2/technology.json
//?api-key=59c2f98774d24c8fa26ffe6b85e6afed

}
