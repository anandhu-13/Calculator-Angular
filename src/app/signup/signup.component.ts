import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signUpForm= new FormGroup({

    username:new FormControl("",[Validators.required,Validators.minLength(4)]),
    email:new FormControl("",[Validators.required,Validators.minLength(4)]),
    password:new FormControl("",[Validators.required,Validators.minLength(4)])


  })

  // getter method

  get username(){
    return this.signUpForm.get("username")
  }

  get email(){
    return this.signUpForm.get("email")
  }

  get password(){
    return this.signUpForm.get("password")
  }


  register(){

    console.log(this.signUpForm.value);

    
  }

}
