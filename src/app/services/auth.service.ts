import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerUrl = "https://data-catalog-0.herokuapp.com/api/register";
  private _loginUrl = "https://data-catalog-0.herokuapp.com/api/login";
  constructor(private http: HttpClient,
              private _router: Router) { }

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
  //Method to logout user
  logoutUser(){
    localStorage.removeItem('token');
    this._router.navigate(['/']);
  }
  //getting token method
  getToken(){
    return localStorage.getItem('token');
  }

}
