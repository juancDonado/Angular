import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Subscription } from 'rxjs';
import { TrackService } from '../services/track.service';

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.css']
})
export class TrackPageComponent implements OnInit, OnDestroy {

  tracksTrending:Array<TrackModel> =[];
  tracksRandom:Array<TrackModel> =[];

  listObservers$:Array<Subscription> = [];

  constructor(private trackService:TrackService) { }

  ngOnInit(): void {

    /* const {data}:any = (dataRaw as any).default;
    this.mockTracksList = data; */
    /* const observer1$ = this.trackService.dataTracksTrending$.subscribe(response => {
      this.tracksTrending = response;
      this.tracksRandom = response;
      //this.tracksRandom = response;
    });
    const observer2$ = this.trackService.dataTracksRandom$.subscribe(response => {
      this.tracksRandom = [...this.tracksRandom,...response];
      console.log('Cancion random');
    });

    this.listObservers$ = [observer1$, observer2$] */

    this.trackService.getAllTracks().subscribe(response => {
      console.log(response);
    });
  }

  ngOnDestroy(): void {
    /* this.listObservers$.forEach(u => u.unsubscribe); */
  }
}
