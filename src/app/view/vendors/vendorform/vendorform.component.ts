import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vendorform',
  templateUrl: './vendorform.component.html',
  styleUrls: ['./vendorform.component.css']
})
export class VendorformComponent implements OnInit {
  vendorsForm! :  FormGroup
  isSubmitted :  boolean = false;
  isEditable : boolean = false;
  constructor(private formBuilder  :  FormBuilder){

  }

  ngOnInit(): void {
      this.createVendosForm()
  }

  createVendosForm(){
    this.vendorsForm =  this.formBuilder.group({
      firmname : [null,[Validators.required,Validators.minLength(3),Validators.maxLength(6)]],
      repname : [null,[Validators.required,Validators.pattern(/[^a-zA-Z ]/g)]], 
      gstnum : [null,[Validators.required,Validators.minLength(9)]],
      emailid  : [null,Validators.required],
      phonenumber : [null,[Validators.required,Validators.maxLength(250)]],
      vaddress  : [null,Validators.required],
    })
  }
  
  get vendorsFormControl(){
    return this.vendorsForm.controls
  }

  saveVendorsFormDetails(){
    this.isSubmitted = true
  }

  
}
