import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  // h:string = localStorage.getItem('access_to')
    constructor(public injector:Injector) { }
    intercept(req,next){

      let authService = this.injector.get(AuthService)
      
      // console.log(authService.getToken());
      let tokenizedReq = req.clone({
        
        setHeaders:{
          Authorization:`${authService.getToken()}`
        }
      })
      // console.log(authService.getToken());
      return next.handle(tokenizedReq)
    }
}
