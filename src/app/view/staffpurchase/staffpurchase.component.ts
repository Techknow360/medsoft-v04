import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { NotifyService } from 'src/app/api-services/common/notify.service';
import { SpinnerService } from 'src/app/api-services/common/spinner.service';

@Component({
  selector: 'app-staffpurchase',
  templateUrl: './staffpurchase.component.html',
  styleUrls: ['./staffpurchase.component.css']
})
export class StaffpurchaseComponent {
  @ViewChild('staffPurchaseHistory') staffPurchaseHistory: any
  staffPurchaseForm! :  FormGroup
  isSubmitted :  boolean = false;
  isEditable : boolean = false;
  constructor(
    private formBuilder  :  FormBuilder,
    private notify : NotifyService,
    private spinner  :  SpinnerService,
    private modalServices  :  NgbModal
    ){

  }

  ngOnInit(): void {
      this.createVendosForm()
  }

  createVendosForm(){
    this.staffPurchaseForm =  this.formBuilder.group({
      staffName : [null,[Validators.required]],
      purDate : [null,[Validators.required]], 
      remarks  : [null,Validators.required],
    })
  }


  
  get staffPurchaseFormControl(){
    return this.staffPurchaseForm.controls
  }

  savestaffPurchaseFormDetails(){
    this.isSubmitted = true
    if(this.staffPurchaseForm.valid){

    }else{
        this.notify.error("Please Fill The Required Fields")
    }
  }
  getBillItemDetails(data){
    if(data?.data){
        this.savestaffPurchaseFormDetails()
    }
  }

  viewPurchaseHistory(){
      this.modalServices.open(this.staffPurchaseHistory,{size:'lg'})
  }

}
