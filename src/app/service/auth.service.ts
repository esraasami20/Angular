import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SharedValueService } from './shared-value.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient, private sharedService: SharedValueService) { }

  private apiUrl = this.sharedService.configuration.apiURI + "/User/";

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<{ token: string }>(this.apiUrl + 'login', { username: username, password: password })
      .pipe(
        map(result => {
          console.log(result.token)
          localStorage.setItem('access_token', result.token);
          return true;
        })
      );
  }
  getToken() {
    return localStorage.getItem('access_token');
  }
  logout() {
    localStorage.removeItem('access_token');
  }
  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }
  
}
