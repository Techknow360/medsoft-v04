import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-paymentform',
  templateUrl: './paymentform.component.html',
  styleUrls: ['./paymentform.component.css']
})
export class PaymentformComponent {
  paymentForm! :  FormGroup
  isSubmitted :  boolean = false;
  isEditable : boolean = false;
  constructor(private formBuilder  :  FormBuilder){

  }

  ngOnInit(): void {
      this.createVendosForm()
      this.onPaymentType();
      this.onPaymentMode();
  }

  createVendosForm(){
    this.paymentForm =  this.formBuilder.group({
      paymentType : ['MISCELLANEOUE',[Validators.required]],
      employeeName : [null],
      salaryMonth : [null],
      vendors_ID : [null],
      billNo : [null],
      total_amount : [null],
      cur_balance : [null],
      paydate : [null,[Validators.required]],
      payamount : [null,Validators.required],
      balance : [null],
      credit_date : [null],
      paymode : [null,[Validators.required]],
      bankname : [null], 
      bankifsc : [null],
      bankbranch  : [null],
      bankaccnum  : [null],
      upi  : [null],
      checkno  : [null],
      desc  : [null],
    })
  }
  
  get paymentFormControl(){
    return this.paymentForm.controls
  }

  onPaymentType(){
    this.paymentForm.get('paymentType')?.valueChanges.subscribe((data)=>{
      if(data == 'VENDORS'){
        this.dynamicValidation(this.paymentFormControl,['vendors_ID','billNo','total_amount','cur_balance'],true)
        this.dynamicValidation(this.paymentFormControl,['employeeName','salaryMonth'],false)
      }else if(data == 'EMPLOYEE'){
        this.dynamicValidation(this.paymentFormControl,['employeeName','salaryMonth'],true)
        this.dynamicValidation(this.paymentFormControl,['vendors_ID','billNo','total_amount','cur_balance'],false)
      }else if(data == 'MISCELLANEOUE'){
        this.dynamicValidation(this.paymentFormControl,['employeeName','salaryMonth'],false)
        this.dynamicValidation(this.paymentFormControl,['vendors_ID','billNo','total_amount','cur_balance'],false)
      }
    });
  }

  onPaymentMode(){
    this.paymentForm.get('paymode')?.valueChanges.subscribe((data)=>{
      if(data == 'BANK'){
        this.dynamicValidation(this.paymentFormControl,['bankname','bankifsc','bankbranch','bankaccnum'],true)
        this.dynamicValidation(this.paymentFormControl,['upi'],false)
        this.dynamicValidation(this.paymentFormControl,['checkno'],false)
      }else if(data == 'UPI'){
        this.dynamicValidation(this.paymentFormControl,['upi'],true)
        this.dynamicValidation(this.paymentFormControl,['checkno'],false)
        this.dynamicValidation(this.paymentFormControl,['bankname','bankifsc','bankbranch','bankaccnum'],false)
      }else if(data == 'CHEQUE'){
        this.dynamicValidation(this.paymentFormControl,['checkno'],true)
        this.dynamicValidation(this.paymentFormControl,['upi'],false)
        this.dynamicValidation(this.paymentFormControl,['bankname','bankifsc','bankbranch','bankaccnum'],false)

      }
    })
  }

  savePaymentDetails(){
    this.isSubmitted = true
    console.log(this.paymentForm.getRawValue())
  }

  dynamicValidation(formControls,data,type){
    for(let formdata of data){
      if(type){
        formControls[formdata].setValidators([Validators.required])
        formControls[formdata].updateValueAndValidity();
      }else{
        formControls[formdata].patchValue(null);
        formControls[formdata].clearValidators()
        formControls[formdata].updateValueAndValidity();
      }
    }

  }


}
