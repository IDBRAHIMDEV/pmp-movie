import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideosPageComponent } from './pages/videos-page/videos-page.component';

const routes: Routes = [
  {path:'videos',component: VideosPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
