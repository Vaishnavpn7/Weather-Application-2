import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {



  getweather(loc:any){

    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=6fa99e1f96f024f79970c5a3532b2ac6&units=metric`)
  }

  constructor() { }
}
