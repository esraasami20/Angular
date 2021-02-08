import { Injectable } from '@angular/core';
import { Register } from '../module/register';
import { BlogService } from './blog.service';
import { RegisterService } from './register.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  constructor(public blogservice: BlogService, public userservice: RegisterService) { }

}
