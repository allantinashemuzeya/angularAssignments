import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class FriendsApiService {

  // @ts-ignore
  constructor(private http:HttpClient){}

  getData(){
    let url = 'https://randomuser.me/api'

    return this.http.get(url)
  }
}
