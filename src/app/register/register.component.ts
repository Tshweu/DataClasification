import { Component, OnInit } from '@angular/core';
import { UserModel } from '../user-model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: UserModel = new UserModel();
  
  //injecting auth service
  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
  }

  registerUser(){
    this._auth.registerUser(this.user)
      //subscribe to authentication because we expect
      //a response(res or err) from the api
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }
}
