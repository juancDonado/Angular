import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { observable, Observable, of } from 'rxjs';
import * as dataRaw from '../../../data/tracks.json'

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  dataTracksTrending$:Observable<TrackModel[]> = of([]);
  dataTracksRandom$:Observable<TrackModel[]> = of([]);

  constructor() { 
    const { data }:any = (dataRaw as any).default
    this.dataTracksTrending$ = of(data);

    this.dataTracksRandom$ = new Observable((observer) => {
      const trackExample:TrackModel = {
        _id: '9',
        name: 'Leve',
        album: 'Cartel de Santa',
        url: 'http://',
        cover: 'https://pbs.twimg.com/profile_images/984273169497260032/ixV69gkh_400x400.jpg'
      }
      setTimeout(()=>{
        observer.next([trackExample]);
      },3000);
      
    });
  }
}
