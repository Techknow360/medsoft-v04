import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { NotifyService } from 'src/app/api-services/common/notify.service';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {
  @ViewChild('vendorsForm') vendorsForm : any
  resetTable: Subject<boolean> = new Subject<boolean>();
  formMode :  string
  tableData :  any =[]
  tableConfig :any
  openAlert :  boolean = false

  constructor(
    config: NgbModalConfig,
    private modalService :  NgbModal,
    private notify :  NotifyService
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
        {"type":"db","title":"Firm/Company Name","tbody":"firmname","width":"10","filter" : true},
        {"type":"db","title":"Representative Name","tbody":"repname","width":"10","filter" : true},
        {"type":"db","title":"GST Number","tbody":"gstnum","width":"10","filter" : true},
        {"type":"db","title":"Email ID","tbody":"emailid","width":"10","filter" : true},
        {"type":"db","title":"Phone Number","tbody":"phonenumber","width":"10","filter" : true},
        {"type":"btngroup","title":"Actions","width":"20","btnconfig":[
          {"type":"icon","action":"VIEW","icon":"fa fa-eye","title":"View","color":"green"},
          {"type":"icon","action":"EDIT","icon":"fa fa-edit","title":"Edit","color":"blue"},
          {"type":"icon","action":"HISTORY","icon":"fa fa-history","title":"Work Flow History","color":"gray"},
          {"type":"icon","action":"DELETE","icon":"fa fa-trash","title":"Delete","color":"red"},
        ]}
      ],
    }

    this.tableData = [
      {firmname:'Parthiban PVT LMT',repname:"Parthiban",gstnum:"GST01IND1234",emailid:"parthiban@gmail.com",phonenumber:"97878787897"},
      {firmname:'Sireesha PVT LMT',repname:"Sireesha",gstnum:"GST01IND1234",emailid:"sireesha@gmail.com",phonenumber:"97878787897"},
    ]
  }

  onbodyActionClick(type){
    if(type.Action == 'EDIT' || type.Action == "VIEW"){
      this.formMode =  type.Action
      this.modalService.open(this.vendorsForm,{centered:false,size:'lg'})
    }else if(type.Action == 'DELETE'){
      this.openAlert =  true
    }
  }

  headerActionClick(type){

  }

  createNewVendors(){
    this.modalService.open(this.vendorsForm,{centered:false,size:'lg'})
  }

  closeModal(){
    this.modalService.dismissAll()
  }

  deleteData(type){
    if(type == 'YES'){
        this.openAlert =  false
        this.notify.success("Data Deleted SuccessFully")
    }else{
      this.openAlert =  false
    }
  }
}
