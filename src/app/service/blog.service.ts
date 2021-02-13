import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from '../module/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  getAll() {
    return this.http.get<Blog[]>("http://localhost:3000/Blog/new")
  }
  getMyBlog() {
    return this.http.get<Blog[]>("http://localhost:3000/Blog/myblogs")
  }
  setMyBlog(blog: any) {
    return this.http.post<Blog>("http://localhost:3000/Blog/", blog)
  }
  editMyBlog(id, blog: Blog) {
    return this.http.patch<Blog>("http://localhost:3000/Blog/" + id, blog)
  }
  delMyBlog(id) {
    return this.http.delete<Blog>("http://localhost:3000/Blog/" + id)
  }
  getFBlog(username) {
    return this.http.get<Blog[]>("http://localhost:3000/Blog/auther/" + username)
  }
  getFollowingBlog() {
    return this.http.get<Blog[]>("http://localhost:3000/Blog/home")
  }
  searchBlog(searched){
    return this.http.get<Blog[]>("http://localhost:3000/Blog/search/"+searched)
  }
  deleteAll(){
    return this.http.delete<Blog>("http://localhost:3000/Blog/delete")
  }


  constructor(public http: HttpClient) { }
}
