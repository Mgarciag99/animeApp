import { Component, OnInit } from '@angular/core';
import { Datum, Categories } from '../interfaces/shared-interface';
import { SharedService } from '../services/shared-service';
declare function view_panel():any;
declare function closePanel():any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {


  panel() {
    view_panel();
  }

  close(){
    closePanel();
  }

   
  
  


}
