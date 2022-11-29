import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
//ANIME COMPONENTS
import { AnimeForCategorieComponent } from './pages/anime-for-categorie/anime-for-categorie.component';
import { AnimeSeeComponent } from './pages/anime-see/anime-see.component';
import { AnimeIndexComponent } from './pages/anime-index/anime-index.component';
import { AnimeListComponent } from './components/anime-list/anime-list.component';
import { AnimeSearchComponent } from './pages/anime-search/anime-search.component';
import { AnimeInputComponent } from './components/anime-input/anime-input.component';
//ANIME SHARED
import { SharedModule  } from '../shared/shared-module';


@NgModule({
  declarations: [
    AnimeForCategorieComponent,
    AnimeSeeComponent,
    AnimeIndexComponent,
    AnimeListComponent,
    AnimeSearchComponent,
    AnimeInputComponent,
  ],
  exports: [
    AnimeForCategorieComponent, 
    AnimeSeeComponent,
    AnimeIndexComponent,
    AnimeListComponent,
    AnimeSearchComponent,
    AnimeInputComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule
  ]
})
export class AnimeModule { }
