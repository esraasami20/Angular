import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from '../module/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  getAll(){
    return this.http.get<Blog[]>("http://localhost:3000/blogs/")    
  }
  constructor(public http:HttpClient) { }
}
