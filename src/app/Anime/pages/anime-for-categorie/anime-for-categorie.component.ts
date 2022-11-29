import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from '../../services/service-anime';
import { switchMap, tap } from 'rxjs/operators';
import { Anime } from '../../interfaces/interface-anime';


@Component({
  selector: 'app-anime-for-categorie',
  templateUrl: './anime-for-categorie.component.html',
  styleUrls: ['./anime-for-categorie.component.css']
})


export class AnimeForCategorieComponent implements OnInit {
  anime : Anime[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private animeService: AnimeService) {
  }

  ngOnInit(): void {
      this.activatedRoute.params
      .subscribe( ({ id })=>{
        this.animeService.getAnimeForCategorie( id )
          .subscribe( anime => this.anime = anime.data )
      } );
  }

  

}
