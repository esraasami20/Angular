import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../module/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  login(log: Login) {
    return this.http.post<Login>("http://localhost:3000/User", log)

  }
  constructor(public http: HttpClient) { }
}
