import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from '../../services/service-anime';
import { Data } from '../../interfaces/interface-anime-list';
@Component({
  selector: 'app-anime-see',
  templateUrl: './anime-see.component.html',
  styleUrls: ['./anime-see.component.css']
})
export class AnimeSeeComponent implements OnInit {
  
  anime !: Data; 

  constructor(
    private activatedRoute: ActivatedRoute,
    private animeService: AnimeService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe( ({ id })=>{
      this.animeService.getAnime( id )
        .subscribe( anime => {
          this.anime = anime.data;
        } )
      } );
  }
}
