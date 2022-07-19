import { SharedValueService } from './shared-value.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from '../module/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient, private sharedService: SharedValueService) { }

  private apiUrl = this.sharedService.configuration.apiURI + "/Blog/";

  getAll() {
    return this.http.get<Blog[]>( this.apiUrl + "new")
  }
  getMyBlog() {
    return this.http.get<Blog[]>(this.apiUrl + "myblogs")
  }
  setMyBlog(blog: any) {
    return this.http.post<Blog>(this.apiUrl, blog)
  }
  editMyBlog(id, blog: Blog) {
    return this.http.patch<Blog>(this.apiUrl + id, blog)
  }
  delMyBlog(id) {
    return this.http.delete<Blog>(this.apiUrl + id)
  }
  getFBlog(username) {
    return this.http.get<Blog[]>(this.apiUrl +"auther/" + username)
  }
  getFollowingBlog() {
    return this.http.get<Blog[]>(this.apiUrl + "home")
  }
  searchBlog(searched) {
    return this.http.get<Blog[]>(this.apiUrl + "search/" + searched)
  }
  addComment(comment) {
    return this.http.patch<Blog>(this.apiUrl + "addComment" ,comment)
  }
  deleteAll() {
    return this.http.delete<Blog>(this.apiUrl + "/delete")
  }
}
