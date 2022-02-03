import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class WeatherApiGlitchService {

  // @ts-ignore
  constructor(private http:HttpClient){}

  getData(lat: string, long: string){
   let url = 'https://fcc-weather-api-glitch.me/api/current?lat='+lat+'&lon='+long

    return this.http.get(url)
  }
}
