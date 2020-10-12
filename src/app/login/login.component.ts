import { Component, OnInit } from '@angular/core';
import { UserModel } from '../user-model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: UserModel = new UserModel();

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.user);
  }

}
