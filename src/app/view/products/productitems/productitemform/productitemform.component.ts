import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-productitemform',
  templateUrl: './productitemform.component.html',
  styleUrls: ['./productitemform.component.css']
})
export class ProductitemformComponent {

  productsitemsForm! :  FormGroup
  isSubmitted :  boolean = false;
  isEditable : boolean = false;
  constructor(private formBuilder  :  FormBuilder){

  }

  ngOnInit(): void {
      this.createProductsItemsForm()
  }

  createProductsItemsForm(){
    this.productsitemsForm =  this.formBuilder.group({
      product_ID : [null],
      vendors_ID : [null,[Validators.required]], 
      pquant : [null,[Validators.required]],
      invprice  : [null,Validators.required],
      mrp_price : [null,Validators.required],
      discount  : [null,Validators.required],
      salse_price : [null,Validators.required],
      expiry_date :[null,Validators.required],
      staxation : [null,Validators.required],
      hsncode : [null,Validators.required],
      tax : [null,Validators.required],
      cgst : [null,Validators.required],
      sgst : [null,Validators.required],
      desc : [null],
    })
  }
  
  get productsitemsFormControl(){
    return this.productsitemsForm.controls
  }

  saveproductsitemsFormDetails(){
    this.isSubmitted = true
    console.log(this.productsitemsForm.getRawValue())
  }
}
