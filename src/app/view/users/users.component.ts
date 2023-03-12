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
  constructor(
    private formBuilder  :  FormBuilder
  ){

}

ngOnInit(): void {
    this.createUserForm()
}

createUserForm(){

  this.userForm =  this.formBuilder.group({
    firstName : [null,[Validators.required,Validators.minLength(4),Validators.maxLength(6)]],
    middleName : [null,Validators.required], 
    lastName : [null,Validators.required],
    fatherName  : [null,Validators.required],
    address : [null,Validators.required],
    dateofbirth  : [null,Validators.required],
    mobileno  : [null,Validators.required],
    email :[null,Validators.required],
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
