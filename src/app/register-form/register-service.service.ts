import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private http : HttpClient) { }
  // register(){
  //   return this.http.<any>('$',{environment.baseUrl})
  // }
}
