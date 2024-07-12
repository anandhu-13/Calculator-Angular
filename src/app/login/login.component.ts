import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  signInForm= new FormGroup({
    username: new FormControl("",[Validators.required, Validators.minLength(4)]),
    password:new FormControl("",[Validators.required, Validators.minLength(4)])
  })

  get username(){
    return this.signInForm.get("username")
  }

  get password(){
    return this.signInForm.get("password")
  }


  
  login(){
    console.log(this.signInForm.value);
    
  }



}
