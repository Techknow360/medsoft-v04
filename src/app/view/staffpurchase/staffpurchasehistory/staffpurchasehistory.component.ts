import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-staffpurchasehistory',
  templateUrl: './staffpurchasehistory.component.html',
  styleUrls: ['./staffpurchasehistory.component.css']
})
export class StaffpurchasehistoryComponent implements OnInit {
  resetTable: Subject<boolean> = new Subject<boolean>();
  tableData :  any =[]
  tableConfig :any

  constructor(
    public modalServices :  NgbModal,

  ){

  }

  ngOnInit(): void {
    this.createPurchaseHistoryTable();
  }

  createPurchaseHistoryTable(){
    this.tableConfig = {
      "tableconfig" : {"name":"staffPurchaseHistory","title":"Staff Purchase History","download": false,"search":false,"showentries":false,"currentpage": false,
      "refresh":false,"showingentries":false,"sorting": false,"pagination":false,"add":false,"colsearch":false,"excelcond":true,"norecordsFound":true},
      "config" : [
        {"type":"db","title":"Staff Name","tbody":"staffName","width":"10","filter" : true},
        {"type":"db","title":"Purchase Date","tbody":"purDate","width":"10","filter" : true},
        {"type":"db","title":"Remarks","tbody":"remarks","width":"10","filter" : true},
        {"type":"btngroup","title":"Actions","width":"20","btnconfig":[
          {"type":"icon","action":"VIEW","icon":"fa fa-eye","title":"View","color":"green"},
          {"type":"icon","action":"EDIT","icon":"fa fa-edit","title":"Edit","color":"blue"},
          {"type":"icon","action":"CANCEL","icon":"fa fa-trash","title":"Cancel Application","color":"red"},
        ]}
      ],
    }
  }

  onbodyActionClick(type){

  }

  headerActionClick(type){

  }

}
