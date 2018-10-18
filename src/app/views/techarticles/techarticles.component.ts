import { Component, OnInit } from '@angular/core';
import { NytService } from './../../modules/nyt/nyt.service';

@Component({
  selector: 'app-techarticles',
  templateUrl: './techarticles.component.html',
  styleUrls: ['./techarticles.component.css']
})

export class TecharticlesComponent implements OnInit {
  articles: any[] = [ ];
   selectedTrack = -1;
   constructor(private _apiSvc: NytService, private _dialogService: DialogService) {
     _apiSvc.getTechArticles().subscribe(x => {
       this.tracks = x.tracks.track;
       this.attributes = x.tracks['@attr'];
      });
 }

  ngOnInit() {
  }

}
