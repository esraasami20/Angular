import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../module/blog';
import { Register } from '../module/register';
import { AuthService } from '../service/auth.service';
import { BlogService } from '../service/blog.service';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  newBlog: Blog = new Blog("", "", [], "");
  user: Register = new Register("", "", "", "", "");
  constructor(public auth: AuthService, public register: RegisterService, public routes: Router,public serviceBlog:BlogService) { }
  logout() {
    this.auth.logout()
  }
  onselect(){}
  post(){}
  edit() {
    console.log(this.user)
    this.register.editUserData(this.user).subscribe(      
      b => {
        
        alert("^_^ Edited ^_^");
        this.routes.navigate(['/profile']);
        console.log(b);
      }
    )
  }
  editform() {
    this.register.getUserData().subscribe(
      a => {
        this.user = a;
      }
    )
  }
  deletee() {
    if (confirm("Are you sure !!")) {
      this.serviceBlog.deleteAll().subscribe(
        b=>{
          console.log(b)
        }
      )
      this.register.deleteUserData().subscribe(
      a=>
      this.routes.navigate(['/'])
      )
      
      localStorage.removeItem('access_token')

    }
  }
  ngOnInit(): void {
  }

}
