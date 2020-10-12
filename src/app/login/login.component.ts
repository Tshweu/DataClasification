import { Component, OnInit } from '@angular/core';
import { UserModel } from '../user-model';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: UserModel = new UserModel();

  constructor(private _auth:AuthService) { }

  ngOnInit(): void {
  }

  login(){
    this._auth.loginUser(this.user)
      .subscribe(
        err => console.log(err),
        res => console.log(res)
      )
  }

}
