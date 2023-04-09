import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @ViewChild('usersForm') usersForm : any
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
        {"type":"db","title":"Full Name","tbody":"fullName","width":"10","filter" : true},
        {"type":"db","title":"Date of Birth","tbody":"dateofbirth","width":"10","filter" : true},
        {"type":"db","title":"Email ID","tbody":"email","width":"10","filter" : true},
        {"type":"db","title":"Phone Number","tbody":"mobileno","width":"10","filter" : true},
        {"type":"db","title":"Role","tbody":"role","width":"10","filter" : true},
        {"type":"btngroup","title":"Actions","width":"20","btnconfig":[
          {"type":"icon","action":"VIEW","icon":"fa fa-eye","title":"View","color":"green"},
          {"type":"icon","action":"EDIT","icon":"fa fa-edit","title":"Edit","color":"blue"},
          {"type":"icon","action":"PASSWORD RESET","icon":"fa fa-lock","title":"Work Flow History","color":"gray"},
          {"type":"icon","action":"CANCEL","icon":"fa fa-trash","title":"Cancel Application","color":"red"},
        ]}
      ],
    }

    this.tableData = [
      {fullName:'Parthiban',dateofbirth:"05-04-1999",gstnum:"GST01IND1234",email:"parthiban@gmail.com",mobileno:"97878787897",role:"ADMIN"},
      {fullName:'Sireesha',dateofbirth:"13-05-1998",gstnum:"GST01IND1234",email:"sireesha@gmail.com",mobileno:"97878787897",role:"EMPLOYEE"},
    ]
  }

  onbodyActionClick(type){

  }

  headerActionClick(type){

  }

  createNewVendors(){
    this.modalService.open(this.usersForm,{centered:false,size:'lg'})
  }

  closeModal(){
    this.modalService.dismissAll()
  }

}
