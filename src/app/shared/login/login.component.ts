import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  isSubmitted :  boolean = false
  constructor(
    private formBuilder  :  FormBuilder
    ){}

  ngOnInit(): void {
    this.createLoginForm()
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      userName  : [null,Validators.required],
      password  : [null,Validators.required]
    })
  }

  get loginFormControls(){
    return this.loginForm.controls
  }

  onLogin(){
    this.isSubmitted =  true
  }

}
