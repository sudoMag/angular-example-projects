import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';

import { HomeComponent } from './home/home.component';
import { NewsPageComponent } from './news-page/news-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'news', component: NewsPageComponent },
  { path: 'following', component: FavoritesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
