import { Component, HostListener, OnInit, Inject, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NotifyService } from 'src/app/api-services/common/notify.service';
import { SpinnerService } from 'src/app/api-services/common/spinner.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-billform',
  templateUrl: './billform.component.html',
  styleUrls: ['./billform.component.css']
})
export class BillformComponent implements OnInit {
  @Output("createNew") createNew : EventEmitter<any> = new EventEmitter();
  @ViewChild('billScroll') private billScrollDown: ElementRef;
  @ViewChild('cameraCapture') private cameraCapture : any
  signleUser :  boolean = true
  billform !: FormGroup
  isSubmitted :  boolean = false
  isbillprint : boolean = false
  elem: any;
  billItemsDetailsData  : any
  constructor( 
    @Inject(DOCUMENT) private document: any,
    private formBuilder: FormBuilder,
    private notify : NotifyService,
    private spinner :  SpinnerService,
    private modalServices :  NgbModal,
    config: NgbModalConfig,
    ) { 
      config.backdrop = 'static';
      config.keyboard = false;
    }

  ngOnInit(): void {
    this.elem = document.documentElement;
    this.initiateForm();
  }



  initiateForm(){
    this.billform =  this.formBuilder.group({
       customerDetails :  this.formBuilder.group({
        phonenum  : [null,[Validators.required,Validators.minLength(6),Validators.maxLength(10)]],
        custname : [null,[Validators.required,Validators.minLength(2),Validators.maxLength(50)]],
        custage : [null,[Validators.required,Validators.max(100)]],
        custaddr : [null,[Validators.required,Validators.minLength(2),Validators.maxLength(150)]]
       }),
    })
  }

  get customerDetailsControls(){
    return (this.billform.get('customerDetails') as FormGroup).controls
  }

  get getbillformControl() {
    return this.billform.controls;
  }

  saveCustomerDetails(){
    this.isSubmitted = true
  }

  saveBillDetails(){
    this.isSubmitted = true;
    console.log(this.billform.getRawValue())
    if(this.billform.valid){
        
    }else{
      this.notify.error("Please Fill The Required Fields")
    }
  }

  resetDetails(){
    this.isSubmitted = false;
    this.ngOnInit();
  }

  openCameraCapture(){
      this.modalServices.open(this.cameraCapture)
  }

  createNewBill(){
    this.createNew.emit()
  }


  getBillItemDetails(data){
    console.log(data?.data)
    if(data?.data){
      this.billItemsDetailsData =  data?.data
      this.saveBillDetails();
    }
  }

}
