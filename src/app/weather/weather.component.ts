import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  constructor (private services:WeatherService) {}

  wdata={
    lname:"",
    humidity:"",
    temp:"",
    windspeed:"",
    description:"",

  }
  

  findweather(inpt:any){

    console.log(inpt.value);
    let loc =inpt.value
    this.services.getweather(loc).then(res=>res.json()).then(data=>{

      this.wdata.lname=data.name
      this.wdata.humidity=data.main.humidity
      this.wdata.temp=data.main.temp
      this.wdata.windspeed=data.wind.speed
      this.wdata.description=data.weather[0].description

    })


  }
  

}
