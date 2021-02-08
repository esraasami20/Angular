import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Blog } from '../module/blog';
import { AuthService } from '../service/auth.service';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogs:Blog[];
  logout(){
    this.auth.logout()
  }
    
  constructor(public serviceblog:BlogService,public auth:AuthService) { }
    
  ngOnInit(): void {
    this.serviceblog.getAll().subscribe(
      a=>{
        this.blogs=a;
      }
    )
  }

}
