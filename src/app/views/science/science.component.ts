import { DialogService } from 'ng2-bootstrap-modal';
import { NytService } from './../../modules/nyt/nyt.service';
import { Component, OnInit } from '@angular/core';
import {SciencePopupComponent} from './science-popup/science-popup.component';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent {
  artists: any[] = [ ];
  attributes: any[] = [ ];
  constructor(private _apiSvc: NytService, private _dialogService: DialogService) {
    _apiSvc.getArtists(1).subscribe(x => {
      this.artists = x.artists.artist;
      this.attributes = x.artists['@attr'];
     });
  }

  showDetail(index, artist) {
    console.log(index);
    console.log(artist.name);
    const disposable =  this._dialogService.addDialog(ArtistPopupComponent,  {
                      title: artist.name,
                      message: 'Playcount: ' + artist.playcount,
                      linkUrl: artist.url,
                      imageUrl: artist.image[2]['#text']})
                      .subscribe((isConfirmed) => {
                      });
                  setTimeout(() => {
                      disposable.unsubscribe();
                  }, 10000);
  }
}
