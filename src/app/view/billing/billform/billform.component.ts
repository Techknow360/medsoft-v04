import { Component, HostListener, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-billform',
  templateUrl: './billform.component.html',
  styleUrls: ['./billform.component.css']
})
export class BillformComponent implements OnInit {
  @ViewChild('billScroll') private billScrollDown: ElementRef;
  signleUser :  boolean = false
  billform !: FormGroup
  isSubmitted :  boolean = false
  isbillprint : boolean = false
  elem: any;
  isFullScreen : boolean = false
  billMaxHeight : any = 200  

  constructor( 
    @Inject(DOCUMENT) private document: any,
    private formBuilder: FormBuilder,
   
    ) { }

  ngOnInit(): void {
    this.elem = document.documentElement;
    this.initiateForm();
    window.addEventListener('resize',(event)=>{
      this.billMaxHeight  = screen.availHeight
    })
  }
  @HostListener('window:keypress', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if(event.key == 'Enter' || event.key == '+'){
      this.createBillForms();
    }
    if(event.key == '-'){
      this.deleteBillForms(this.getbillitemsTableArray.length - 1);
    }
  }



  initiateForm(){
    this.billform =  this.formBuilder.group({
       customerDetails :  this.formBuilder.group({
        phonenum  : [null,[Validators.required,Validators.minLength(6),Validators.maxLength(10)]],
        custname : [null,[Validators.required,Validators.minLength(2),Validators.maxLength(50)]],
        custage : [null,[Validators.required,Validators.max(100)]],
        custaddr : [null,[Validators.required,Validators.minLength(2),Validators.maxLength(150)]]
       }),
       billitems : this.formBuilder.array([])
    })
    if(this.getbillitemsTableArray.length == 0){
      this.createBillForms()
    }
  }

  get getbillformControl() {
    return this.billform.controls;
  }

  get customerDetailsControls(){
    return (this.billform.get('customerDetails') as FormGroup).controls
  }

  get getbillitemsTableArray() {
    return this.getbillformControl['billitems'] as FormArray;
  }

  get getbillitemsTableArrayControls(){
    return (this.billform.get('billitems') as FormArray).controls
  }

  createBillForms(){
    const billitemsform = this.formBuilder.group({
        productname : [null,Validators.required],
        expirydate : [null,Validators.required],
        quantity : [null,Validators.required],
        unitprice : [null,Validators.required],
        discount : [null],
        tax : [null],
        netprice : [null,Validators.required]
    })
    this.getbillitemsTableArray.push(billitemsform)
    this.scrollToBottom();
  }

  deleteBillForms(index : number){
    if(this.getbillitemsTableArray.length > 1){
      this.getbillitemsTableArray.removeAt(index)
    }
  }

  saveCustomerDetails(){
    this.isSubmitted = true
  }

  saveBillDetails(){
    this.isbillprint = true
    console.log(this.getbillitemsTableArrayControls);
  }

  resetDetails(){
    this.ngOnInit();
  }

  
  toggleFullScreen(){
    this.isFullScreen  =! this.isFullScreen
    if(this.isFullScreen){
      if (this.elem.requestFullscreen) {
        this.elem.requestFullscreen();
      } else if (this.elem.mozRequestFullScreen) {
        /* Firefox */
        this.elem.mozRequestFullScreen();
      } else if (this.elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.elem.webkitRequestFullscreen();
      } else if (this.elem.msRequestFullscreen) {
        /* IE/Edge */
        this.elem.msRequestFullscreen();
      }
    }else{
      if (this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
      }
    }
  }

  scrollToBottom(): void {
    if(this.billScrollDown){
      this.billScrollDown.nativeElement.scrollTop = this.billScrollDown.nativeElement.scrollHeight;         
    }
  }

  ngAfterViewChecked() {        
    this.scrollToBottom();        
  }

}
