import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Pipe({
  name: 'orderList'
})
export class OrderListPipe implements PipeTransform {

  transform(value: TrackModel[], args:string | null = null): TrackModel[] {
    console.log(value)
    return value;
  }

}
