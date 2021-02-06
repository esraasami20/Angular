import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from '../module/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  regist(regist: Register) {
    return this.http.post<Register>("http://localhost:3000/users", regist)  
      
  }
  constructor(public http:HttpClient) { }
}
