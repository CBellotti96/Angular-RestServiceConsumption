import { DialogService } from 'ng2-bootstrap-modal';
import { NytService } from './../../modules/nyt/nyt.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracks',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css',
]
})
export class TechComponent implements OnInit {

  articles: any[] = [ ];
  attributes: any[] = [ ];
  selectedArt = -1;
  private month_arr: any[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  constructor(private _apiSvc: NytService, private _dialogService: DialogService) {
    _apiSvc.getTechArticles().subscribe(x => {
      this.articles = x.results;
      this.attributes = x;
     });
  }

  showDetail(index, article) {
    console.log(index);
    console.log(article.name);
    if (this.selectedArt === index){
      this.selectedArt = -1;
    } else {
      this.selectedArt = index;
    }
  }

  dateSplit(string) {
    var date = string.split('T');
    var pieces = date[0].split('-');
    var returnable = this.month_arr[pieces[1]-1] + " " + pieces[2] +  ", " + pieces[0];
    return returnable;
  }

  ngOnInit() {

  }

}
