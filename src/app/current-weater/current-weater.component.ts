import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-current-weater',
  templateUrl: './current-weater.component.html',
  styleUrls: ['./current-weater.component.css']
})
export class CurrentWeaterComponent implements OnInit {

  constructor() { }

  data = {
    date: new Date(),
    city: 'London',
    pressure: 1002,
    humidity: 10,
    windSpeed: 6,
    clouds: 40
  };

  ngOnInit() {
  }

}
