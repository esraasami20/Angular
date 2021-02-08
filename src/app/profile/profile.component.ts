import { Component, OnInit } from '@angular/core';
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
  blogs:Blog[];
  logout(){
    this.auth.logout()
  }
    
  constructor(public serviceblog:BlogService,public auth:AuthService,public userService:RegisterService) { }
    upload(photo){
      this.userService.editUserData({photo:photo}).subscribe(
        b=>{
          console.log(b)
        }
      )
    }
  ngOnInit(): void {
    this.serviceblog.getMyBlog().subscribe(
      a=>{
        this.blogs=a;
      }
    )
    this.userService.getUserData().subscribe(
      b=>{
        this.user=b;
      }
    )
  }

}
