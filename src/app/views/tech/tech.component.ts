import { DialogService } from 'ng2-bootstrap-modal';
import { NewYorkTimesService } from './../../modules/';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracks',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  tracks: any[] = [ ];
  attributes: any[] = [ ];
  selectedTrack = -1;
  constructor(private _apiSvc: NewYorkTimesService, private _dialogService: DialogService) {
    _apiSvc.getTracks(1).subscribe(x => {
      this.tracks = x.tracks.track;
      this.attributes = x.tracks['@attr'];
     });
  }

  showDetail(index, track) {
    console.log(index);
    console.log(track.name);
    if (this.selectedTrack === index){
      this.selectedTrack = -1;
    } else {
      this.selectedTrack = index;
    }
  }
    ngOnInit() {
  }

}