import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import {  Anime } from '../../interfaces/interface-anime';
import { AnimeService } from '../../services/service-anime';

@Component({
  selector: 'app-anime-search',
  templateUrl: './anime-search.component.html',
  styleUrls: ['./anime-search.component.css']
})
export class AnimeSearchComponent implements OnInit {
  
  constructor(
    private AnimeService: AnimeService
  ) { }
//  anime!: Animes;
  anime : Anime[] = [];
  animeSuggestions : Anime[] = [];
  searchText: string = '';
  haveError: boolean = false;

  ngOnInit(): void {
  }

  search( searchText: string ){
    this.haveError = false;
    this.searchText = searchText;
    //console.log(this.termino);
    this.AnimeService.getAnimeSearch( this.searchText )
    .subscribe( anime =>{
      console.log( anime );
      this.anime = anime.data;
     // console.log(this.countries);
      
    }, (err) => {
      this.haveError = true;
      this.anime = [];
      console.info(err);
    });
    console.log( searchText );
  }


  suggestions( searchText: string ){
    this.haveError = false;
    //crear sugerencias
    this.AnimeService.getAnimeSearch( searchText )
    .subscribe( anime => this.animeSuggestions = anime.data );
  }
}
