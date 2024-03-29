import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

    constructor(public injector:Injector) { }
    intercept(req,next){

      let authService = this.injector.get(AuthService)
      
      let tokenizedReq = req.clone({
        
        setHeaders:{
          Authorization:`${authService.getToken()}`
        }
      })
      
      return next.handle(tokenizedReq)
    }
}
