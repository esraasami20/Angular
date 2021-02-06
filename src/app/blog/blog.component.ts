import { Component, OnInit } from '@angular/core';
import { Blog } from '../module/blog';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs:Blog[];
  constructor(public blogService:BlogService) { }

  ngOnInit(): void {
    // console.log("done");
    // this.blogService.getAll().subscribe(
    //   a=>{
    //     this.blogs=a;
    //   }
    // )
  }

}
