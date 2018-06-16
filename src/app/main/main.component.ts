import { Component, OnInit } from '@angular/core';
import { ForecastLoaderService } from '../forecast-loader.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private loader: ForecastLoaderService) {
  }

  ngOnInit() {
    //this.getWeather();
  }

  public getWeather(city) {
    debugger;
    this.loader.get(city).subscribe(
      data => { this.dataFromServer = data;},
      err => console.error(err),
        () => console.log('done loading foods')
    );
  }
}
