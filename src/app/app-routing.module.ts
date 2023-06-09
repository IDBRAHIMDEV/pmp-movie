import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimilarComponent } from './components/similar/similar.component';

const routes: Routes = [
  {
    path: 'Similar', component: SimilarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
