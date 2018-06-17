import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class ForecastLoaderService {

  constructor(private httpClient: HttpClient) { }

  appid = '19e5bf2595560c8f62b65a2b86a6c463';

  public get(cityName): Observable<any>{
    const httpParams: HttpParams = new HttpParams()
      .set('q', cityName)
      .set('appid', this.appid)
      .set('units', 'metric');

    return this.httpClient.get('https://api.openweathermap.org/data/2.5/forecast', {params: httpParams});
  }
}
