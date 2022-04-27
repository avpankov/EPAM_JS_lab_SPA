import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  lat!: number;
  lon!: number;
  weather!: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getLocation();
  }

  getLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.watchPosition((success) => {
        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;

        this.weatherService.getWeatherDataByCoords(this.lat, this.lon).subscribe((response: any) => {
          this.weather = response;
          console.log(response)
        })
      })
    }
  }

  getCity(city: string) {
    this.weatherService.getWeatherDataByCityName(city).subscribe((response: any) => {
      this.weather = response;
    })
  }

}
