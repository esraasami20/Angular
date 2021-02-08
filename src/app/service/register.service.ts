import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from '../module/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  regist(regist: Register) {
    return this.http.post<Register>("http://localhost:3000/User", regist)
  }
  getUserData() {
    return this.http.get<Register>("http://localhost:3000/User/mypage")

  }
  editUserData(user) {
    return this.http.patch<Register>("http://localhost:3000/User/edit", user)
  }
  deleteUserData() {
    return this.http.delete<Register>("http://localhost:3000/User/del")
  }
  constructor(public http: HttpClient) { }
}
