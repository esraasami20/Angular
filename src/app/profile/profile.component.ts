import { SharedValueService } from './../service/shared-value.service';
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
  constructor(public serviceblog: BlogService,
              public auth: AuthService, 
              public fb: FormBuilder, 
              public userService: RegisterService, 
              public router: Router,
              public sharedService: SharedValueService) {
    this.userService.getUserData().subscribe(
      () => this.username = this.user.username
    )

    this.addForm = this.fb.group({
      title: [''],
      body: [''],
      tags: ['']
    })
  }

  public serverAPI = this.sharedService.configuration.apiURI;

  selectedimg: File;
  euser = new FormData();

  onselectedphoto(event) {
    this.selectedimg = <File>event.target.files[0];
    this.euser.append('photo', this.selectedimg, this.selectedimg.name)

  }

  upload() {
    this.euser.append('username',this.user.username);
    // this.euser.append('password',this.user.password);
    this.euser.append('Fname',this.user.Fname);
    this.euser.append('Lname',this.user.Lname);
    this.euser.append('email',this.user.email);
    this.euser.append('dob',this.user.dob);
    for(let i=0;i<this.user.following.length;i++){
      this.euser.append('following',this.user.following[i]);
    }
    for(let i=0;i<this.user.followers.length;i++){
      this.euser.append('following',this.user.followers[i]);
    }

    this.userService.editUserData(this.euser).subscribe(
      b => {
        console.log(b)
        location.reload();
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
        
      })
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
    }

    this.serviceblog.setMyBlog(this.Blog).subscribe(
      c => {
        console.log(c)
      })
    location.reload();
  }

  editBlog() {
    this.serviceblog.editMyBlog(this.eBlog._id, this.eBlog).subscribe(
      a => {

        console.log(a);
      })
  }

  deleteBlog(id) {
    this.serviceblog.delMyBlog(id).subscribe(
      a => {
        console.log(a)
        console.log("deleted")
      })
  }

  ngOnInit(): void {
    this.serviceblog.getMyBlog().subscribe(
      a => {
        this.blogs = a.reverse();
      }
    )
    this.userService.getUserData().subscribe(
      b => {
        this.user = b;
      }
    )
  }

}
