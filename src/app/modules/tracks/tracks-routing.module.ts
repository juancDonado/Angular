import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackPageComponent } from './pages/track-page.component';

const routes: Routes = [
  {
    path: '',
    component: TrackPageComponent,
    outlet: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TracksRoutingModule { }
