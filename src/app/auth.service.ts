import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerUrl = "http://localhost:3000/api/register";
  private _loginUrl = "http://localhost:3000/api/login";
  constructor(private http: HttpClient) { }

  registerUser(user){
    return this.http.post<any>(this._registerUrl,user);
  }

  loginUser(userLogin){
    return this.http.post<any>(this._loginUrl,userLogin);
  }
  //Method to check if token exists
  loggedIn(){
    //used double negation instead of 
    //localStorage.getItem('token') != null ? true : false.
    return !!localStorage.getItem('token') && localStorage.getItem('token') !== 'undefined' ;
  }
  //getting token method
  getToken(){
    return localStorage.getItem('token');
  }

}
