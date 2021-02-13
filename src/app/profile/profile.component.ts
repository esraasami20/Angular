import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { title } from 'process';
import { Blog } from '../module/blog';
import { Register } from '../module/register';
import { AuthService } from '../service/auth.service';
import { BlogService } from '../service/blog.service';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: Register = new Register("", "", "", "", "");
  blogs: Blog[];
  newBlog: Blog = new Blog("", "", [], "");
  eBlog: Blog = new Blog("", "", []);

  logout() {
    this.auth.logout()
  }
  selectedFile: File;
  addForm: FormGroup;
  username: any;
  Blog = new FormData();
  constructor(public serviceblog: BlogService, public auth: AuthService, public fb: FormBuilder, public userService: RegisterService, public router: Router) {
    this.userService.getUserData().subscribe(
      b => {
        this.username = this.user.username;
        // console.log(b)
      }
    )
    this.addForm = this.fb.group({
      title: [''],
      body: [''],
      tags: ['']
    })
  }
  selectedimg: File;
  euser = new FormData();
  onselectedphoto(event) {
    this.selectedimg = <File>event.target.files[0];
    this.euser.append('photo', this.selectedimg, this.selectedimg.name)

  }
  upload() {
    console.log(this.euser)
    this.userService.editUserData(this.euser).subscribe(
      b => {
        console.log(b)
      }
    )
  }
  addComment(id,comment) {
    let refaat={
      id:id,
      Comment:{
        body:comment
      }
    }
    this.serviceblog.addComment(refaat).subscribe(
      a => {
        console.log(a);
        
      }
    )
    location.reload();
  }

  onselect(event) {
    this.selectedFile = <File>event.target.files[0];
    this.Blog.append('photo', this.selectedFile, this.selectedFile.name)
  }
  getdata(title, tags, body, _id) {
    this.eBlog = new Blog(title, body, tags),
      this.eBlog._id = _id;
  }
  post() {
    this.Blog.append('title', this.newBlog.title)
    this.Blog.append('body', this.newBlog.body)
    for (let i = 0; i < this.newBlog.tags.length; i++) {

      this.Blog.append('tags', this.newBlog.tags[i])
      console.log(this.newBlog.tags[i])
    }


    this.serviceblog.setMyBlog(this.Blog).subscribe(
      c => {
        console.log(c)
      }
    )
    location.reload();
    // this.newBlog = new Blog("", "", [], "");
  }
  editBlog() {
    this.serviceblog.editMyBlog(this.eBlog._id, this.eBlog).subscribe(
      a => {

        console.log(a);
      }
    )
  }
  deleteBlog(id) {
    this.serviceblog.delMyBlog(id).subscribe(
      a => {
        console.log(a)
        console.log("deleted")
      }
    )

  }
  ngOnInit(): void {
    this.serviceblog.getMyBlog().subscribe(
      a => {
        this.blogs = a.reverse();
        // console.log(a)
      }
    )
    this.userService.getUserData().subscribe(
      b => {
        this.user = b;
        // console.log(b)
      }
    )
  }

}
