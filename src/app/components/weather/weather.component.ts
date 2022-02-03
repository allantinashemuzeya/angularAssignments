import { Component, OnInit, Input } from '@angular/core';
import {WeatherApiGlitchService} from "../../services/weather/weather-api-glitch.service";

import { ReactiveFormsModule } from '@angular/forms'


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public lat = ''
  public lon = ''

  constructor(private weatherApi:WeatherApiGlitchService) {

    this.weatherApi.getData(this.lat, this.lon).subscribe(data=>{
      console.warn('Data:: ', data)
    })

  }

  ngOnInit(): void {
  }

}
