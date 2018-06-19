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

  public dataFromServer: any;
  public isValid: boolean = true;

  ngOnInit() {
    this.getWeather('Kiev');
  }

  public getWeather(city: string): void {
    if (!city) {
      this.isValid = false;

      return;
    }

    this.loader.get(city).subscribe(
      data => {
        this.isValid = true;
        this.dataFromServer = data;
      },
      err => {
        this.isValid = false;
      }
    );
  }
}
