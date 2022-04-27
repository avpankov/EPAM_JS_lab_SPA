import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url: string = 'https://api.openweathermap.org/data/2.5/forecast';
  apiKey: string = 'f4f393a6b57edd8d0d1a2677528233d0';

  constructor(private http: HttpClient) { }

  getWeatherDataByCoords(lat: number, lon: number) {
    let params = new HttpParams()
      .set('lat', lat)
      .set('lon', lon)
      .set('appid', this.apiKey)
      .set('units', 'metric');

    return this.http.get(this.url, { params });
  }

  getWeatherDataByCityName(city: string) {
    let params = new HttpParams()
      .set('q', city)
      .set('appid', this.apiKey)
      .set('units', 'metric');
    return this.http.get(this.url, { params });
  }
}
