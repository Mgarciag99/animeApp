import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeSeeComponent } from './Anime/pages/anime-see/anime-see.component';
import { AnimeIndexComponent } from './Anime/pages/anime-index/anime-index.component';
import { AnimeForCategorieComponent } from './Anime/pages/anime-for-categorie/anime-for-categorie.component';
import { AnimeSearchComponent } from './Anime/pages/anime-search/anime-search.component';
const routes: Routes = [
  {
    path: '',
    component: AnimeIndexComponent,
    pathMatch: 'full'
  },
  {
    path: 'Anime/Search',
    component: AnimeSearchComponent
  },
  {
    path: 'genre/:id',
    component: AnimeForCategorieComponent
  },
  {
    path: 'anime/:id',
    component: AnimeSeeComponent
  },
  {
    path: '**',
    redirectTo: ''
  }


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
