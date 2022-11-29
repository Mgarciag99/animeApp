import { Component, Input, OnInit } from '@angular/core';
import { Anime } from '../../interfaces/interface-anime';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {
  
  @Input() anime: Anime[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
