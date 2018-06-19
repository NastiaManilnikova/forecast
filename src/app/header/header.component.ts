import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() onChangeCityCb: EventEmitter<any> = new EventEmitter();
  @Input() isValid: boolean;
  @Input() data: any;

  public onChangeCity(event: any): void {
    if (event.type ==='keyup' && event.keyCode !== 13) {
      return;
    }

    this.onChangeCityCb.emit(event.target.value);
  }
}
