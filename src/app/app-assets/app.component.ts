import { Component, OnInit, Output } from '@angular/core';
import {WeatherApiGlitchService} from '../services/weather/weather-api-glitch.service';
import {FormGroup, FormBuilder, AbstractControl} from "@angular/forms";
import {WeatherComponent} from "../components/weather/weather.component";
import {HttpClient}  from '@angular/common/http'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kobusAngular';
  @Output() lat = '';
  @Output() lon = '';


  // @ts-ignore
  coordinatesForm: FormGroup;


  constructor(private fb:FormBuilder) {}

  ngOnInit(){
      this.initializeForm();
  }

  initializeForm():void{
    this.coordinatesForm = this.fb.group({
      latitude:'',
      longitude:'',
    })
  }

  onSubmit():void{
    // @ts-ignore
    this.lat = this.coordinatesForm.controls['latitude'].value
    this.lon = this.coordinatesForm.controls['longitude'].value

    console.log(this.coordinatesForm)
  }



}


