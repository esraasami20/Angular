import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from '../module/register';
import { SharedValueService } from './shared-value.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient, private sharedService: SharedValueService) { }

  private apiUrl = this.sharedService.configuration.apiURI + "/User/";
  
  regist(regist: Register) {
    return this.http.post<Register>(this.apiUrl, regist)
  }
  getUserData() {
    return this.http.get<Register>(this.apiUrl + "mypage")
  }
  editUserData(user) {
    return this.http.patch<Register>(this.apiUrl + "edit", user)
  }
  deleteUserData() {
    return this.http.delete<Register>(this.apiUrl + "del")
  }
  getUser(username) {
    return this.http.get<Register>(this.apiUrl + username)
  }
  followUser(username) {
    return this.http.get<Register>(this.apiUrl +"follow/" + username)
  }
  unfollowUser(username) {
    return this.http.get<Register>(this.apiUrl + "unfollow/" + username)
  }
  searchUser(searched) {
    return this.http.get<Register[]>(this.apiUrl + "search/" + searched)
  }
}
