import { Component, OnInit } from '@angular/core';
import {FormBuilder,  FormGroup,  Validators} from '@angular/forms';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
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
      lastName : [
        {error : 'required','smartmessage' : 'Custom Message Required '},
        {error : 'minlength','smartmessage' : 'Custom Message Minimum Lenth '}
      ]
    }
}

createUserForm(){
  this.userForm =  this.formBuilder.group({
    firstName : [null,[Validators.required,Validators.minLength(3),Validators.maxLength(6)]],
    middleName : [null,[Validators.required,Validators.pattern(/[^a-zA-Z ]/g)]], 
    lastName : [null,[Validators.required,Validators.minLength(9)]],
    fatherName  : [null,Validators.required],
    address : [null,[Validators.required,Validators.maxLength(250)]],
    dateofbirth  : [null,Validators.required],
    mobileno  : [null,Validators.required],
    email :[null,[Validators.required,Validators.email]],
    gender : [null,Validators.required],
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
