import { Component } from '@angular/core';
import { Datum, Categories } from '../interfaces/shared-interface';
import { SharedService } from '../services/shared-service';

declare function view_panel():any;
declare function closePanel():any;
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent  {

  categories : Datum[] = [];
  constructor( private sharedService : SharedService ) {
    this.sharedService.getCategories()
    .subscribe( categories=> {
     // console.log(categories.data);
      this.categories = categories.data; 
    }) 
  }

  panel() {
    view_panel();
  }

  close(){
    closePanel();
  }


}
