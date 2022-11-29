import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Datum, Categories } from '../interfaces/shared-interface'; 
@Injectable({
  providedIn: 'root'
})

export class SharedService {
  private apiUrl: string = 'https://api.jikan.moe/v4/';
  constructor( private http: HttpClient ) {}

  getCategories( ) : Observable<Categories>{ 
    const url = `${ this.apiUrl }genres/anime`;
    return this.http.get<Categories>( url );
  }



  
}
