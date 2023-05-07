import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vendorform',
  templateUrl: './vendorform.component.html',
  styleUrls: ['./vendorform.component.css']
})
export class VendorformComponent implements OnInit {
  @Input('mode') mode : string = 'EDIT'
  vendorsForm! :  FormGroup
  isSubmitted :  boolean = false;
  isEditable : boolean = false;
  constructor(
    private formBuilder  :  FormBuilder,
    public modalServices :  NgbModal
    ){

  }

  ngOnInit(): void {
      this.createVendosForm()
      this.updateFormMode()
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
    console.log(this.vendorsForm.getRawValue());
  }

  updateFormMode(){
    if(this.mode == 'VIEW'){
      this.isEditable =  false
      this.vendorsForm.disable()
    }else{
      this.isEditable =  true
      this.vendorsForm.enable()
    }
  }

  
}
