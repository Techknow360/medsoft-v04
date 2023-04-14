import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-productitems',
  templateUrl: './productitems.component.html',
  styleUrls: ['./productitems.component.css']
})
export class ProductitemsComponent {
  @ViewChild('productItemForm') productItemForm : any
  resetTable: Subject<boolean> = new Subject<boolean>();
  tableData :  any =[]
  tableConfig :any

  constructor(
    config: NgbModalConfig,
    private modalService :  NgbModal,
    private route  : Router
  ){
		config.backdrop = 'static';
		config.keyboard = false;
  }

  ngOnInit(): void {
      this.createVendorsTable();
  }

  createVendorsTable(){
    this.tableConfig = {
      "tableconfig" : {"name":"VendorsDetails","title":"Vendors Details","download": true,"search":true,"showentries":true,"currentpage": false,
      "refresh":true,"showingentries":true,"sorting": true,"pagination":true,"add":false,"colsearch":false,"excelcond":true},
      "config" : [
        // {"type":"db","title":"Product ID","tbody":"product_ID","width":"10","filter" : true},
        {"type":"db","title":"Vendor Name","tbody":"vendors_ID","width":"10","filter" : true},
        {"type":"db","title":"Batch Code","tbody":"batch_code","width":"10","filter" : true},
        {"type":"db","title":"HSN Code","tbody":"hsncode","width":"10","filter" : true},
        {"type":"db","title":"Expiry Date","tbody":"expiry_date","width":"10","filter" : true},
        {"type":"db","title":"Current Quantity","tbody":"curquant","width":"10","filter" : true},
        {"type":"db","title":"No Of Days","tbody":"noOfDays","width":"10","filter" : true},
        {"type":"btngroup","title":"Actions","width":"20","btnconfig":[
          {"type":"icon","action":"VIEW","icon":"fa fa-eye","title":"View","color":"green"},
          {"type":"icon","action":"EDIT","icon":"fa fa-edit","title":"Edit","color":"blue"},
          {"type":"icon","action":"CANCEL","icon":"fa fa-trash","title":"Cancel Application","color":"red"},
        ]}
      ],
    }

    this.tableData = [
      {vendors_ID:'PARTHIBAN PVT LMT',batch_code:'BATCODE01',hsncode:"HSNCODE01",expiry_date:"01-04-2098",curquant:"20",noOfDays:"10 Days"},
      {vendors_ID:'SIREESHA PVT LMT',batch_code:'BATCODE01',hsncode:"HSNCODE02",expiry_date:"01-04-2098",curquant:"80",noOfDays:"108 Days"},
    ]
  }

  onbodyActionClick(type){
    if(type.Action == 'PRODUCTITEMS'){
        this.route.navigate(['productitems'],{
        queryParams : {
            productId : type.returnData
          }
        })
    }
  }

  headerActionClick(type){

  }

  createNewVendors(){
    this.modalService.open(this.productItemForm,{centered:false,size:'lg'})
  }

  closeModal(){
    this.modalService.dismissAll()
  }
}
