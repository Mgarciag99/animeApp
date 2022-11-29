import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-anime-input',
  templateUrl: './anime-input.component.html',
  styleUrls: ['./anime-input.component.css']
})
export class AnimeInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce : EventEmitter<string> = new EventEmitter();
  debouncer: Subject<string> = new Subject;

  constructor() { }
  search : string = '';

  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe( valor =>{
      console.log(valor);
      this.onDebounce.emit( valor );
    })
  }
  keyPress(){
    this.debouncer.next( this.search );
  }

  searchInput(){
    this.onEnter.emit( this.search );
  }
}
