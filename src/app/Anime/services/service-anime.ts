import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animes } from '../interfaces/interface-anime'; 
import { Anime } from '../interfaces/interface-anime-list';
@Injectable({
  providedIn: 'root'
})

export class AnimeService {
  private apiUrl: string = 'https://api.jikan.moe/v4/';
  constructor( private http: HttpClient ) {}

  getAnimeForCategorie( id: string ) : Observable<Animes>{ 
    const url = `${ this.apiUrl }anime?genres=${ id }`;
    return this.http.get<Animes>( url );
  }

  getAnime( id: string ) : Observable<Anime>{ 
    const url = `${ this.apiUrl }anime/${ id }`;
    return this.http.get<Anime>( url );
  }

  getAnimeSearch( id: string ) : Observable<Animes>{
    const url = `${ this.apiUrl }anime?q=${ id }`;
    return this.http.get<Animes>( url );
  }


  getAnimePopularityForLimit( limit: string ) : Observable<Animes>{
    const url = `${ this.apiUrl }top/anime?limit=${ limit }&type=movie&filter=bypopularity`;
    return this.http.get<Animes>( url );
  }
  
}
