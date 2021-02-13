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
    
  constructor(public serviceblog:BlogService) { }
    
  ngOnInit(): void {
    this.serviceblog.getAll().subscribe(
      a=>{
        this.blogs=a.reverse();
      }
    )
  }

}
