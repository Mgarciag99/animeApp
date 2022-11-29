import { Component, Input, OnInit } from '@angular/core';
import { Datum, Categories } from '../../interfaces/shared-interface';
@Component({
  selector: 'app-shared-categories',
  templateUrl: './shared-categories.component.html',
  styleUrls: ['./shared-categories.component.css']
})
export class SharedCategoriesComponent  {
  @Input() categories : Datum[] = [];
  constructor() { 
  }
}
