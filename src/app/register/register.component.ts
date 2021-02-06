import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../service/register.service';
import { Register } from '../module/register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // submitted:boolean=false;
  rigister: Register | any;
  errorMessage:any;
  constructor(public registService: RegisterService, public router:Router) { }

  onSubmit(rig) {
    // this.submitted=true;
    console.log(rig);
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
