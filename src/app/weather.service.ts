import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
// import { catchError, tap, last } from 'rxjs/operators';
import { WeatherResponse } from './weather_response';


const weather_url="http://api.openweathermap.org/data/2.5/weather?APPID=3477c01ef37b20f5aad8fcd3b8f0e272";
@Injectable()
export class WeatherService {

  constructor(
    private http:HttpClient
  ) { }

  fetchWeatherDetails(lat:string,lon:string):Observable<WeatherResponse>{
    let url=weather_url+"&lat="+lat+"&lon="+lon;
    return this.http.get<WeatherResponse>(url);
  }

}
