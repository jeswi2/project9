import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

viewcars=()=>{
  return this.http.get("https://myfakeapi.com/api/cars")
}

  }

