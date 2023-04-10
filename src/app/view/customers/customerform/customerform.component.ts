import { Component, OnInit } from '@angular/core';
import {FormBuilder,  FormGroup,  Validators} from '@angular/forms';

@Component({
  selector: 'app-customerform',
  templateUrl: './customerform.component.html',
  styleUrls: ['./customerform.component.css']
})
export class CustomerformComponent {
  customerForm! :  FormGroup
  isSubmitted :  boolean = false;
  isEditable : boolean = false;
  isShowGuardian :  boolean = false
  constructor(
    private formBuilder  :  FormBuilder
  ){

}

ngOnInit(): void {
    this.createcustomerForm()
    this.customerForm.get('cage')?.valueChanges.subscribe((data)=>{
      if(data <= 10 && data){
        this.isShowGuardian =  true
      }else{
        this.isShowGuardian =  false
      }
    })
}

createcustomerForm(){
  this.customerForm =  this.formBuilder.group({
    custid : [null,[Validators.required,Validators.minLength(3),Validators.maxLength(6)]],
    cname  : [null,Validators.required],
    cage : [null,[Validators.required,Validators.maxLength(250)]],
    cguradname  : [null,Validators.required],
    cphoneno  : [null,Validators.required],
    cgender : [null,Validators.required],
    caddr : [null,Validators.required],
  })
}

get customerFormControl(){
  return this.customerForm.controls
}

savecustomerFormDetails(){
  this.isSubmitted = true;
}
}
