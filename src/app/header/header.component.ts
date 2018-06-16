import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() onChangeCityCb = new EventEmitter();

  onChangeCity(event) {
    console.log(event);
    this.onChangeCityCb.emit(event.target.value);
  }

}
