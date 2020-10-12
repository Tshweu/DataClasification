import { Injectable } from '@angular/core';
import { HttpInterceptor} from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private _auth:AuthService) { }
  //request from original and next is passed on to api
  intercept(req,next){
    let tokenizedReq = req.clone({
      setHeaders:{
        Authorization: `Bearer ${this._auth.getToken()}`
      }
    })
    return next.handle(tokenizedReq)
  }
}
