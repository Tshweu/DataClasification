import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user-model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: UserModel = new UserModel();
  
  //injecting auth service
  constructor(private _auth: AuthService,
              private _router:Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    this._auth.registerUser(this.user)
      //subscribe to authentication because we expect
      //a response(res or err) from the api
      .subscribe(
        res => {console.log(res)
                //store token
                localStorage.setItem('token',res.token)
                //navigate to login
                this._router.navigate(['/login'])},
        err => console.log(err)
      )
  }
}
