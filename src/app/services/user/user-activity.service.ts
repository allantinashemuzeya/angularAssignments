import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserActivityService {

  // @ts-ignore
  constructor(private http:HttpClient){}

  getData(){
    let url = 'https://www.boredapi.com/api/activity'

    return this.http.get(url)
  }
}


