import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {
  resetTable: Subject<boolean> = new Subject<boolean>();
  tableData :  any =[]
  tableConfig :any

  constructor(){

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
          {"type":"icon","action":"CANCEL","icon":"fa fa-trash","title":"Cancel Application","color":"red"},
        ]}
      ],
    }

    this.tableData = [
      {firmname:'Parthiban PVT LMT',repname:"Parthiban",gstnum:"GST01IND1234",emailid:"parthiban@gmail.com",phonenumber:"97878787897"},
      {firmname:'Parthiban PVT LMT',repname:"Parthiban",gstnum:"GST01IND1234",emailid:"parthiban@gmail.com",phonenumber:"97878787897"},
    ]
  }

  onbodyActionClick(type){

  }

  headerActionClick(type){

  }
}
