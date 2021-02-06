import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<{Auth: string}>('http://localhost:3000/users/login', {username: username, password: password})
      .pipe(
        map(result => {
          console.log(result.Auth)
          localStorage.setItem('access_token', result.Auth);
          return true;
        })
      );
  }
  logout() {
    localStorage.removeItem('access_token');
  }
  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }
}
