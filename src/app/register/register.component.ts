import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../service/register.service';
import { Register } from '../module/register';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  img:File;
  choosen:boolean;
  // submitted:boolean=false;
  rigister: Register | any;
  errorMessage:any;
  constructor(public registService: RegisterService, public router:Router) { }
  fun(event:any){
    if(event.target.value){
      this.img=<File>event.target.files[0]
      this.choosen=true;
    }
  }
  onSubmit(rig) {
    // this.submitted=true;
    // let fd=new FormData();
    // fd.append('photo',this.img,this.img.name)
    // fd.append({rig}|FormData)
    // console.log(fd)
    console.log(rig);
    // console.log(this.img)
    return this.registService.regist(rig).subscribe(
      a => {
        this.router.navigate([
          '/login'
        ])
      },
      error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    )
  }
  ngOnInit(): void {
  }

}
