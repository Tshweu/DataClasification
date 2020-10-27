import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _auth:AuthService,private _router:Router) { }

  ngOnInit(): void {
  }
  
  loggedIn(){
    return this._auth.loggedIn();
  }

  logout(){
    return this._auth.logoutUser();
  }
}
