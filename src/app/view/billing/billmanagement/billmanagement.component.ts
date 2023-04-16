import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-billmanagement',
  templateUrl: './billmanagement.component.html',
  styleUrls: ['./billmanagement.component.css']
})
export class BillmanagementComponent {
  @ViewChild('billDetails') billDetails : any
  resetTable: Subject<boolean> = new Subject<boolean>();
  tableData :  any =[]
  tableConfig :any
  billItemsViewMode : string

  constructor(
    config: NgbModalConfig,
    private modalService :  NgbModal,
    private route  : Router
  ){
		config.backdrop = 'static';
		config.keyboard = false;
  }

  ngOnInit(): void {
      this.createbillDetailsTable();
  }

  createbillDetailsTable(){
    this.tableConfig = {
      "tableconfig" : {"name":"VendorsDetails","title":"Vendors Details","download": true,"search":true,"showentries":true,"currentpage": false,
      "refresh":true,"showingentries":true,"sorting": true,"pagination":true,"add":false,"colsearch":false,"excelcond":true},
      "config" : [
        {"type":"db","title":"Bill Number","tbody":"billNo","width":"10","filter" : true},
        {"type":"db","title":"Name","tbody":"custName","width":"10","filter" : true},
        {"type":"db","title":"Phone Number","tbody":"custPhNo","width":"10","filter" : true},
        {"type":"db","title":"Bill Date","tbody":"billDate","width":"10","filter" : true},
        {"type":"db","title":"Amount","tbody":"billAmount","width":"10","filter" : true},
        {"type":"db","title":"Status","tbody":"billStatus","width":"10","filter" : true},
        {"type":"btngroup","title":"Actions","width":"20","btnconfig":[
          {"type":"icon","action":"VIEW","icon":"fa fa-eye","title":"View","color":"green"},
          {"type":"icon","action":"EDIT","icon":"fa fa-edit","title":"Edit","color":"blue"},
          {"type":"icon","action":"VIEWPDF","icon":"fa fa-file","title":"Edit","color":"orange"},
          {"type":"icon","action":"CANCEL","icon":"fa fa-trash","title":"Cancel Application","color":"red"},
        ]}
      ],
    }

    this.tableData = [
      {billNo:'BILL01',custName:'Partiban',custPhNo:"746984895456",billDate:"12-12-2012",billAmount:"5455454",billStatus : "COMPLETED"},
      {billNo:'BILL02',custName:'Sireesha',custPhNo:"99867654645",billDate:"11-12-2023",billAmount:"2033455",billStatus : "UPDATED"},
    ]
  }

  onbodyActionClick(type){
    if(type.Action == 'VIEW' || type.Action == 'EDIT'){
       this.billItemsViewMode = type.Action
       this.modalService.open(this.billDetails,{size : 'xl'})
    }
  }

  headerActionClick(type){

  }

  createNewVendors(){
    this.route.navigate(['/bill'])
  }

  closeModal(){
    this.modalService.dismissAll()
  }

  getBillItemDetails(data){

  }

}
