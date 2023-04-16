import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-productreturn',
  templateUrl: './productreturn.component.html',
  styleUrls: ['./productreturn.component.css']
})
export class ProductreturnComponent {
  @ViewChild('retunProducts') retunProducts :  any
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
      this.createProductRetunTable();
  }

  createProductRetunTable(){
    this.tableConfig = {
      "tableconfig" : {"name":"VendorsDetails","title":"Vendors Details","download": true,"search":true,"showentries":true,"currentpage": false,
      "refresh":true,"showingentries":true,"sorting": true,"pagination":true,"add":false,"colsearch":false,"excelcond":true},
      "config" : [
        {"type":"db","title":"Bill Number","tbody":"billno","width":"10","filter" : true},
        {"type":"db","title":"Products","tbody":"products","width":"10","filter" : true},
        {"type":"db","title":"Product Items ","tbody":"productitems","width":"10","filter" : true},
        {"type":"db","title":"Return Quantity","tbody":"returnquant","width":"10","filter" : true},
        {"type":"db","title":"Return Date","tbody":"retundate","width":"10","filter" : true},
        {"type":"db","title":"Description","tbody":"desc","width":"10","filter" : true},
        {"type":"btngroup","title":"Actions","width":"20","btnconfig":[
          {"type":"icon","action":"VIEW","icon":"fa fa-eye","title":"View","color":"green"},
          // {"type":"icon","action":"EDIT","icon":"fa fa-edit","title":"Edit","color":"blue"},
          {"type":"icon","action":"CANCEL","icon":"fa fa-trash","title":"Cancel Application","color":"red"},
        ]}
      ],
    }

    this.tableData = [
      {billno:'BILL01',products:'Dolo 350',productitems:"",returnquant:"20",retundate:"05-40-1999",desc:"Remarks"},
      {billno:'BILL02',products:'Paracitamal',productitems:"",returnquant:"30",retundate:"13-07-1998",desc : "Remarks"},
    ]
  }

  onbodyActionClick(type){

  }

  closeModal(){
    this.modalService.dismissAll()
  }

  openProductReturn(){
    this.modalService.open(this.retunProducts,{centered:false,size:'lg'})
  }

  headerActionClick(type){

  }

  backToProducts(){
    this.route.navigate(['/products'])
  }
}
