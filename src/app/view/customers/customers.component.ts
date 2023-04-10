import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  @ViewChild('customerForm') customerForm : any
  resetTable: Subject<boolean> = new Subject<boolean>();
  tableData :  any =[]
  tableConfig :any

  constructor(
  config: NgbModalConfig,
  private modalService :  NgbModal,
){
  config.backdrop = 'static';
  config.keyboard = false;
}

ngOnInit(): void {
    this.createVendorsTable();
}

createVendorsTable(){
  this.tableConfig = {
    "tableconfig" : {"name":"usersDetails","title":"Users Details","download": true,"search":true,"showentries":true,"currentpage": false,
    "refresh":true,"showingentries":true,"sorting": true,"pagination":true,"add":false,"colsearch":false,"excelcond":true},
    "config" : [
      {"type":"db","title":"Customer ID","tbody":"custid","width":"10","filter" : true},
      {"type":"db","title":"Name","tbody":"cname","width":"10","filter" : true},
      {"type":"db","title":"Age","tbody":"cage","width":"10","filter" : true},
      {"type":"db","title":"Phone Number","tbody":"cphoneno","width":"10","filter" : true},
      {"type":"db","title":"Address","tbody":"caddr","width":"10","filter" : true},
      {"type":"btngroup","title":"Actions","width":"20","btnconfig":[
        {"type":"icon","action":"VIEW","icon":"fa fa-eye","title":"View","color":"green"},
        {"type":"icon","action":"EDIT","icon":"fa fa-edit","title":"Edit","color":"blue"},
        {"type":"icon","action":"PASSWORD RESET","icon":"fa fa-lock","title":"Work Flow History","color":"gray"},
        {"type":"icon","action":"CANCEL","icon":"fa fa-trash","title":"Cancel Application","color":"red"},
      ]}
    ],
  }

  this.tableData = [
    {custid:'CUST1234',cname:"SAI D",cage:"12",cphoneno:"97878787897",caddr:"THIRUPORUR"},
    {custid:'CUST4567',cname:"SOMU",cage:"42",cphoneno:"97878787897",caddr:"MINAL"},
  ]
}

onbodyActionClick(type){

}

headerActionClick(type){

}

createNewVendors(){
  this.modalService.open(this.customerForm,{centered:false,size:'lg'})
}

closeModal(){
  this.modalService.dismissAll()
}
}
