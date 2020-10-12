import { Component, OnInit } from '@angular/core';
import { UserModel } from '../user-model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: UserModel = new UserModel();
  
  constructor() { }

  ngOnInit(): void {
  }

  registerUser(){
    console.log(this.user);
  }
}
