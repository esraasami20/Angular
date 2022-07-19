import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../module/blog';
import { Register } from '../module/register';
import { AuthService } from '../service/auth.service';
import { BlogService } from '../service/blog.service';
import { RegisterService } from '../service/register.service';
import { SharedValueService } from '../service/shared-value.service';

@Component({
  selector: 'app-friend-profile',
  templateUrl: './friend-profile.component.html',
  styleUrls: ['./friend-profile.component.css']
})
export class FriendProfileComponent implements OnInit {
  logedUser:Register=new Register("","","","","");
  user: Register = new Register("", "", "", "", "");
  blogs: Blog[];
  // owner:Register=new Register("","","","","");
  follow: boolean=true;
  btn: string = "follow";
  constructor(public blogService: BlogService,
              public userservice: RegisterService,
              public authservice: AuthService,
              public router: Router,
              public ar: ActivatedRoute,
              public sharedService: SharedValueService) { }

  public serverAPI = this.sharedService.configuration.apiURI;
  
  followMe() {
    if(this.btn=="follow"){
    this.userservice.followUser(this.user.username).subscribe(
      a => {
        console.log(a);  
        location.reload();      
      }
    )
    
  }
    else{
      this.userservice.unfollowUser(this.user.username).subscribe(
        a=>{
          console.log(a);
          location.reload();      
        }
      )
  
    }
  }
  addComment(id,comment) {
    let refaat={
      id:id,
      Comment:{
        body:comment
      }
    }
    this.blogService.addComment(refaat).subscribe(
      a => {
        console.log(a);
        
      }
    )
    location.reload();
  }
  ngOnInit() {
    let username: string = "";


    this.ar.params.subscribe(
      a => {
        username = a['username']
      }
    )
    this.userservice.getUserData().subscribe(
      a=>{
        this.logedUser=a;

    })
    this.blogService.getFBlog(username).subscribe(
      a => {
        this.blogs = a.reverse();
      }
    )

    this.userservice.getUser(username).subscribe(
      a => {
        this.user = a;
        if(this.logedUser.username == this.user.username){
          this.follow=false;
        }
      }
    )

    if(this.follow){
      this.userservice.getUserData().subscribe(
        a => {
          a.following.findIndex(value => {
            if (value == username)
             { 
               this.btn = "unfollow";
            }
          });
        }
      );
    }
  }

}
