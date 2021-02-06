import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../module/login';
import { logging } from 'protractor';
import {Blog} from '../module/blog';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // getAll(){
  //   return this.http.get<Blog[]>("http://localhost:3000/blogs/")
  // }
  login(log: Login) {
    return this.http.post<Login>("http://localhost:3000/users/login", log)    
  }

  constructor(public http: HttpClient) { }
}
