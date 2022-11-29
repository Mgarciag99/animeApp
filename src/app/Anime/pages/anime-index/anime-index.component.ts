import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../../services/service-anime';
import {  Animes } from '../../interfaces/interface-anime';

@Component({
  selector: 'app-anime-index',
  templateUrl: './anime-index.component.html',
  styleUrls: ['./anime-index.component.css']
})
export class AnimeIndexComponent implements OnInit {
  totalAnimes: string = '4';
  anime !: Animes;

  constructor(
    private AnimeService: AnimeService
  ) { 
    this.AnimeService.getAnimePopularityForLimit( this.totalAnimes )
    .subscribe( animes=> {
      console.log(animes);
      this.anime = animes; 
    }) 
  }

  ngOnInit(): void {
  }



}
