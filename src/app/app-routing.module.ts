import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsMovieComponent } from './components/details-movie/details-movie.component';
const routes: Routes = [
  { path: 'details/:id', component: DetailsMovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
