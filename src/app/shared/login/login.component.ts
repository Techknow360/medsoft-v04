import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  isSubmitted :  boolean = false
  constructor(
    private formBuilder  :  FormBuilder,
    private route : Router
    ){}

  ngOnInit(): void {
    this.createLoginForm()
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      userName  : [null,[Validators.required,Validators.maxLength(120)]],
      password  : [null,[Validators.required,Validators.minLength(8),Validators.maxLength(15)]]
    })
  }

  get loginFormControls(){
    return this.loginForm.controls
  }

  onLogin(){
    this.isSubmitted =  true
    if(this.loginForm.valid){
      this.route.navigate(['dashboard'])
    }
  }

}
