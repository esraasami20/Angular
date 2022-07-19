import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../module/login';
import { SharedValueService } from './shared-value.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient, private sharedService: SharedValueService) { }

  private apiUrl = this.sharedService.configuration.apiURI + "/User/";

  login(loginModel: Login) {
    return this.http.post<Login>(this.apiUrl, loginModel)
  }
}
