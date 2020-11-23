import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor} from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  // constructor(private _auth:AuthService) { }
  // //request from original and next is passed on to api
  // intercept(req,next){
  //   let tokenizedReq = req.clone({
  //     setHeaders:{
  //       Authorization: `Bearer ${this._auth.getToken()}`
  //     }
  //   })
  //   return next.handle(tokenizedReq)
  // }
  constructor(private injector: Injector){}
  intercept(req, next) {
    let authService = this.injector.get(AuthService)
    let tokenizedReq = req.clone(
      {
        headers: req.headers.set('Authorization', 'bearer ' + authService.getToken())
      }
    )
    return next.handle(tokenizedReq)
  }
}
