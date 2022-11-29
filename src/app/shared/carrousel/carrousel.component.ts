import { Component, Input } from '@angular/core';
import { Animes } from 'src/app/Anime/interfaces/interface-anime';
declare function rigthCarrousel():any;
declare function leftCarrousel():any;
@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent {
  pathImageOne: string = "../assests/images/6917473.webp";
  @Input() anime !: Animes;

  constructor() { }

  rigth() {
    rigthCarrousel();
  }

  left(){
    leftCarrousel();
  }

}
