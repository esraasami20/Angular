import { SharedValueService } from './../service/shared-value.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../module/blog';
import { Register } from '../module/register';
import { BlogService } from '../service/blog.service';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {
  users: Register[];
  blogs: Blog[];
  constructor(public ar: ActivatedRoute,
              public blogservice: BlogService, 
              public userService: RegisterService,
              public sharedService: SharedValueService) { }
  
  public serverAPI = this.sharedService.configuration.apiURI;

  ngOnInit(): void {
    let searched: string = "";
    
    this.ar.params.subscribe(
      a => {
        searched = a['searched']
      }
    )
    this.blogservice.searchBlog(searched).subscribe(
      a => {
        this.blogs = a;
      }
    )
    this.userService.searchUser(searched).subscribe(
      a => {
        this.users = a;
      }
    )
   // let username: string = "";
    // this.userService.getUserData().subscribe(
      // a => {
        // for (let i = 0; i < this.users.length; i++) {
        // a.following.findIndex(value => {
        // if (value == this.users[i].username) {
        // this.btn = "unfollow";
        // this.user = a;
        //  console.log(this.follow);
        // }
        // })
      // })



  }
}
