import { Injectable } from '@angular/core'; //generated
import { Http, Headers } from '@angular/http'; //added from silber's
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ //generated
  providedIn: 'root' //generated
})
export class NytService { //generated

  //constructor() { } //generated

  /* copypasta from silber */
  baseUri: string; //

  //limit = 100;

  private headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type,',
  });

  constructor(private http: Http, baseAPIUri: string) {
    this.baseUri = baseAPIUri;

  }

  getTopArticles = () => this.http.get(
    this.baseUri + 'home.json?api_key=59c2f98774d24c8fa26ffe6b85e6afed',
    { headers: new Headers({
      //'Content-Type': 'application/json'
      //'Accept': 'application/json',
      //'Access-Control-Allow-Headers': 'Accept, Content-Type,',
    }) }).pipe(map(response => {
      const x = response.json();
      //console.log(x);
      //console.log(this.headers);
      return x;
  }))

  getTechArticles = () => this.http.get(
    this.baseUri + 'technology.json?api_key=59c2f98774d24c8fa26ffe6b85e6afed',
    { headers: new Headers({
      //'Content-Type': 'application/json'
      //'Accept': 'application/json',
      //'Access-Control-Allow-Headers': 'Accept, Content-Type,',
    }) }).pipe(map(response => {
      const x = response.json();
      //console.log(x);
      //console.log(this.headers);
      return x;
  }))

  getScienceArticles = () => this.http.get(
    this.baseUri + 'science.json?api_key=59c2f98774d24c8fa26ffe6b85e6afed',
    { headers: new Headers({
      //'Content-Type': 'application/json'
      //'Accept': 'application/json',
      //'Access-Control-Allow-Headers': 'Accept, Content-Type,',
    }) }).pipe(map(response => {
      const x = response.json();
      //console.log(x);
      //console.log(this.headers);
      return x;
  }))

//https://api.nytimes.com/svc/topstories/v2/technology.json
//?api-key=59c2f98774d24c8fa26ffe6b85e6afed

} //generated
