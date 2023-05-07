import { Component, HostListener, OnInit, Inject, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NotifyService } from 'src/app/api-services/common/notify.service';
import { SpinnerService } from 'src/app/api-services/common/spinner.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-billitemsform',
  templateUrl: './billitemsform.component.html',
  styleUrls: ['./billitemsform.component.css']
})
export class BillitemsformComponent {
  @Output() retunBillItemDetails : EventEmitter<any> = new EventEmitter();
  @ViewChild('billScroll') private billScrollDown: ElementRef;
  @Input('billItemsData')  billItemsData : any 
  @Input('submitTitle')  submitTitle : any  =  'Save'
  @Input('mode')  mode : any
  @Input('isScrollRequired') isScrollRequired :  boolean = true
  signleUser :  boolean = true
  billitemform !: FormGroup
  isSubmitted :  boolean = false
  isbillprint : boolean = false
  isFullScreen : boolean = false
  isEditable : boolean = false
  showProductItems : boolean = false
  productItems : any = []
  productItemData  :  any  = [
    {prodctName :"SIREESHA",batchCode:"BAT1567",expDate:"12-2020",discount:"12",qauntity:"120",price:12},
    {prodctName :"PARTHIBAN",batchCode:"BAT5677",expDate:"04-2021",discount:"22",qauntity:"140",price:112},
    {prodctName :"AJITH",batchCode:"BAT4564",expDate:"01-2022",discount:"10",qauntity:"160",price:125},
    {prodctName :"EFFY",batchCode:"BAT146",expDate:"03-2023",discount:"2",qauntity:"190",price:127},
    {prodctName :"SAI",batchCode:"BAT14646",expDate:"12-2024",discount:"4",qauntity:"150",price:172},
    {prodctName :"SOMU",batchCode:"BAT86846",expDate:"10-2024",discount:"45",qauntity:"140",price:472}
  ]
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
    this.initiateForm();
    this.updateFormMode();
    this.selectTableRow()
  }
  @HostListener('window:keypress', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if(event.key == 'Enter' || event.key == '+'){
      this.createbillitemforms();
      this.forceItemShowDisabled()
    }
    if(event.key == '-'){
      this.deletebillitemforms(this.getbillitemsTableArray.length - 1);
      this.forceItemShowDisabled()
    }
  }

  initiateForm(){
    this.billitemform =  this.formBuilder.group({
       billitems : this.formBuilder.array([])
    })
    if(this.getbillitemsTableArray.length == 0){
      this.createbillitemforms()
    }
  }

  get getbillitemformControl() {
    return this.billitemform.controls;
  }

  get getbillitemsTableArray() {
    return this.getbillitemformControl['billitems'] as FormArray;
  }

  get getbillitemsTableArrayControls(){
    return (this.billitemform.get('billitems') as FormArray).controls
  }

  createbillitemforms(){
    const billitemsform = this.formBuilder.group({
        showItems : [false,Validators.required],
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

  deletebillitemforms(index : number){
    if(this.getbillitemsTableArray.length > 1){
      this.getbillitemsTableArray.removeAt(index)
    }
  }

  saveBillDetails(){
    this.isbillprint = true
    if(this.billitemform.valid){
      let data  =  this.billitemform.getRawValue()
      this.retunBillItemDetails.emit({data : data})
    }else{
      this.notify.error("Please Fill The Required Fields")
    }
  }

  resetDetails(){
    this.isbillprint = false;
    this.ngOnInit();
  }

  scrollToBottom(): void {
    if(this.billScrollDown){
      this.billScrollDown.nativeElement.scrollTop = this.billScrollDown.nativeElement.scrollHeight;         
    }
  }

  ngAfterViewChecked() {        
    this.scrollToBottom();        
  }

  updateFormMode(){
    if(this.mode == 'VIEW'){
      this.isEditable =  false
      this.billitemform.disable()
    }else{
      this.isEditable =  true
      this.billitemform.enable()
    }
  }

  onProductName(data,index){
    let value  = data.target.value
    this.filterProducts(value)
    if(value.length > 0){
      this.updateItemShow(true,index)
    }else{
      this.productItems = []
      this.showProductItems =  false
      this.updateItemShow(false,index)
    }
  }

  filterProducts(value){
    this.productItems  = this.productItemData.filter((data)=>this.isMatch(data,value))
  }

  isMatch(item : any,value) {
    if (item instanceof Object) {
      return Object.keys(item).some((k) => this.isMatch(item['prodctName'],value));
    } else {
      var searchItem  = this.stringSanitize(item);
      var filterdata  = this.stringSanitize(value);
      return searchItem.indexOf(filterdata) > -1
    }
  }

  stringSanitize(value){
    return value.toString().toLowerCase().trim().replace(/\s+/g, "");
   }
   
  updateItemShow(cond,index?){
    let i  = 0
    for(let items  of this.getbillitemsTableArray.getRawValue()){
      if(i == index && cond){
        this.showProductItems =  true
        this.getbillitemsTableArrayControls[i]['controls']['showItems'].patchValue(true)
        this.getbillitemsTableArrayControls[i]['controls']['showItems'].updateValueAndValidity()
      }else if(i != index || !cond){
        this.getbillitemsTableArrayControls[i]['controls']['showItems'].patchValue(false)
        this.getbillitemsTableArrayControls[i]['controls']['showItems'].updateValueAndValidity()
      }
      i++
    }
  }

  forceItemShowDisabled(){
    let i = 0
    for(let items  of this.getbillitemsTableArray.getRawValue()){
        this.showProductItems =  false
        this.getbillitemsTableArrayControls[i]['controls']['showItems'].patchValue(false)
        this.getbillitemsTableArrayControls[i]['controls']['showItems'].updateValueAndValidity()
        i++
    }
  }

  selectTableRow(){
    var table = document.getElementById('billItemsTable') as HTMLTableElement
   var  event = ['keypress','keyup'];
    event.forEach(event =>
      document.addEventListener(event,($event)=>{
        this.onArrowKey($event)
      })
    )
  }

  onArrowKey(event){
    if(event.key == 'ArrowUp'){
        console.log("UP")
    }else if(event.key == 'ArrowDown'){
        console.log("DOWN") 
    }
  }



  // onProductNameLeave(data,index){
  //   let value  = data.target.value
  //   this.updateItemShow(false,)
  // }
}
