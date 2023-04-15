import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  passwordChangeForm : FormGroup;
  isSubmitted :  boolean = false
  constructor(
    private formBuilder  :  FormBuilder,
  ){

  }

  ngOnInit(): void {
    this.createpasswordChangeForm()
  }

  createpasswordChangeForm(){
    this.passwordChangeForm = this.formBuilder.group({
      userName  : [null,[Validators.required,Validators.minLength(8),Validators.maxLength(15)]],
      password  : [null,[Validators.required,Validators.minLength(8),Validators.maxLength(15)]]
    })
  }

  get passwordChangeControls(){
    return this.passwordChangeForm.controls
  }

  onChangePassword(){
    this.isSubmitted = true
  }

}
