import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-constant',
  templateUrl: './constant.component.html',
  styleUrls: ['./constant.component.css']
})
export class ConstantComponent implements OnInit {
  @ViewChild('constantForm') constantForm : any
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
    this.createContTable();
}

createContTable(){
  this.tableConfig = {
    "tableconfig" : {"name":"usersDetails","title":"Users Details","download": true,"search":true,"showentries":true,"currentpage": false,
    "refresh":true,"showingentries":true,"sorting": true,"pagination":true,"add":false,"colsearch":false,"excelcond":true},
    "config" : [
      {"type":"db","title":"Type","tbody":"type","width":"10","filter" : true},
      {"type":"db","title":"Constant ID","tbody":"constID","width":"10","filter" : true},
      {"type":"db","title":"Constant Value","tbody":"contValue","width":"10","filter" : true},
      {"type":"db","title":"Description","tbody":"desc","width":"10","filter" : true},
      {"type":"btngroup","title":"Actions","width":"20","btnconfig":[
        {"type":"icon","action":"VIEW","icon":"fa fa-eye","title":"View","color":"green"},
        {"type":"icon","action":"EDIT","icon":"fa fa-edit","title":"Edit","color":"blue"},
        {"type":"icon","action":"CANCEL","icon":"fa fa-trash","title":"Cancel Application","color":"red"},
      ]}
    ],
  }

  this.tableData = [
    {type:'REPORT',constID:"PRODUCT",contValue:"PRODUCT REPORT",desc:""},
    {type:'REPORT',constID:"REVENUE",contValue:"REVENUE REPORT",desc:""},
  ]
}

onbodyActionClick(type){

}

headerActionClick(type){

}

createNewConstant(){
  this.modalService.open(this.constantForm,{centered:false,size:'lg'})
}

closeModal(){
  this.modalService.dismissAll()
}

}
