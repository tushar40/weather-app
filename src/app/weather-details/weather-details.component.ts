import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../weather.service'
import { WeatherResponse } from '../weather_response';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {
  

  @Input()latitude:string="23";
  @Input()longitude:string="45";
  fetched:boolean=false;
  response:WeatherResponse;


  constructor(
    private weatherService:WeatherService,
  ) { }
  
 
  ngOnInit() {
    
  }
  fetchd():void{
    this.weatherService.fetchWeatherDetails(this.latitude,this.longitude).subscribe(resp=>this.response=resp);
    this.fetched=true;
  }

}
