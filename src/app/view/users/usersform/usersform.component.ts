import { Component, OnInit } from '@angular/core';
import {FormBuilder,  FormGroup,  Validators} from '@angular/forms';

@Component({
  selector: 'app-usersform',
  templateUrl: './usersform.component.html',
  styleUrls: ['./usersform.component.css']
})
export class UsersformComponent {
  userForm! :  FormGroup
  isSubmitted :  boolean = false;
  isEditable : boolean = false;
  smartCustomConfig :  any;
  constructor(
    private formBuilder  :  FormBuilder
  ){

}

ngOnInit(): void {
    this.createUserForm()
    this.smartCustomConfig ={
      fatherName : [
        {error : 'required','smartmessage' : 'Custom Message Required '},
        {error : 'minlength','smartmessage' : 'Custom Message Minimum Lenth '}
      ]
    }
}

createUserForm(){
  this.userForm =  this.formBuilder.group({
    fullName : [null,[Validators.required,Validators.minLength(3),Validators.maxLength(6)]],
    fatherName  : [null,Validators.required],
    address : [null,[Validators.required,Validators.maxLength(250)]],
    dateofbirth  : [null,Validators.required],
    mobileno  : [null,Validators.required],
    email :[null,[Validators.required,Validators.email]],
    gender : [null,Validators.required],
    role : [null,Validators.required],
    location : [null,Validators.required]
  })
}

get userFormControl(){
  return this.userForm.controls
}

saveUserFormDetails(){
  this.isSubmitted = true;
}
}
