import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user-model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginUser: UserModel = new UserModel();

  //inject service and router
  constructor(private _auth:AuthService,
              private _router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this._auth.loginUser(this.loginUser)
      //subscribe to authentication because we expect
      //a response(res or err) from the api
      .subscribe( 
        res => {console.log(res)
                //store token 
                localStorage.setItem('token',res.token)
                //navigate to home page
                this._router.navigate(['/home'])
              },
        err => console.log(err)

      )
  }

}
