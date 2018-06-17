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

  dataFromServer = null;

  ngOnInit() {
    this.getWeather('Kiev');
  }

  public getWeather(city) {
    this.loader.get(city).subscribe(
      data => {
        this.dataFromServer = data;
      },
      err => console.error(err)
    );
  }
}
