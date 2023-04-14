import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.css']
})
export class ProductformComponent implements OnInit {

  productsForm! :  FormGroup
  isSubmitted :  boolean = false;
  isEditable : boolean = false;
  constructor(private formBuilder  :  FormBuilder){

  }

  ngOnInit(): void {
      this.createVendosForm()
  }

  createVendosForm(){
    this.productsForm =  this.formBuilder.group({
      product_name : [null,[Validators.required]],
      schedule : [null,[Validators.required]], 
      product_type : [null,[Validators.required]],
      categories  : [null,Validators.required],
      brandname : [null,[Validators.required,Validators.maxLength(250)]],
      desc  : [null,Validators.maxLength(250)],
    })
  }
  
  get productsFormControl(){
    return this.productsForm.controls
  }

  saveproductsFormDetails(){
    this.isSubmitted = true
  }

  
}
