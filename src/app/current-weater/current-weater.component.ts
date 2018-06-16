import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-current-weater',
  templateUrl: './current-weater.component.html',
  styleUrls: ['./current-weater.component.css']
})
export class CurrentWeaterComponent implements OnInit {

  constructor() { }

  @Input() data: Object;

  ngOnInit() {
  }

}
