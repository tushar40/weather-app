import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
// import { catchError, tap, last } from 'rxjs/operators';
import { WeatherResponse } from './weather_response';


const weather_url="https://samples.openweathermap.org/data/2.5/weather?appid=b6907d289e10d714a6e88b30761fae22";
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
