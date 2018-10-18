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
/* lastfm specific
  getArtists = (page: number) => this.http.get(
    this.baseUri + '/?method=chart.gettopartists&api_key=119e39cb330a0f59c3f1616150e3e8f0&format=json&limit=' +
      this.limit + '&page=' + page,
      { headers: this.headers }).map(x => {
        console.log(x.json());
        return x.json();
      })


  getTracks = (page: number) => this.http.get(
    this.baseUri + '/?method=chart.getTopTracks&api_key=119e39cb330a0f59c3f1616150e3e8f0&format=json&limit=' +
    this.limit + '&page=' + page,
    { headers: this.headers }).map(x => {
      console.log(x.json());
      return x.json();
})
*/
/* copypasta from silber */

/*
getTechArticles = () => this.http.get(
  this.baseUri + '?api_key=59c2f98774d24c8fa26ffe6b85e6afed',
  { headers: this.headers }).map(x => {
    console.log(x.json());
    return x.json();
})*/

getTechArticles = () => this.http.get(
  this.baseUri + '?api_key=59c2f98774d24c8fa26ffe6b85e6afed',
  { headers: new Headers({
    //'Content-Type': 'application/json',
    //'Accept': 'application/json',
    //'Access-Control-Allow-Headers': 'Accept, Content-Type,',
  }) }).pipe(map(response => {
    const x = response.json();
    console.log(x);
    console.log(this.headers);
    return x;
}))





//https://api.nytimes.com/svc/topstories/v2/technology.json
//?api-key=59c2f98774d24c8fa26ffe6b85e6afed

} //generated
