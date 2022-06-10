import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FoodPageComponent } from './nfts-page/food-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'news', component: FoodPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
