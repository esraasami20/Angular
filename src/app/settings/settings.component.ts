import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from '../module/register';
import { AuthService } from '../service/auth.service';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  user: Register = new Register("", "", "", "", "");
  constructor(public auth: AuthService, public register: RegisterService, public routes: Router) { }
  logout() {
    this.auth.logout()
  }

  edit() {
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
