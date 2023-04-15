import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  resetTable: Subject<boolean> = new Subject<boolean>();
  reportForm : FormGroup
  isSubmitted :  boolean = false
  tableData :  any =[]
  tableConfig :any


  constructor(
    private formBuilder : FormBuilder
  ){
    
  }

  ngOnInit(): void {
    this.createReportForm()
    this.createReportTable();
  }

  createReportForm(){
    this.reportForm = this.formBuilder.group({
        reportType : [null,Validators.required],
        type : [null],
        schedule : [null],
        formdate : [null],
        todate : [null]
    })
  }

  get reportFormControls(){
    return this.reportForm.controls
  }
  
  onSearch(){
    this.isSubmitted = true
  }

  onReset(){
    this.isSubmitted = false;
    this.reportForm.reset()
  }

  createReportTable(){
    this.tableConfig = {
      "tableconfig" : {"name":"VendorsDetails","title":"Vendors Details","download": true,"search":false,"showentries":true,"currentpage": false,
      "refresh":true,"showingentries":true,"sorting": true,"pagination":true,"add":false,"colsearch":false,"excelcond":true,"count":100},
      "config" : [
        // {"type":"db","title":"Product ID","tbody":"product_ID","width":"10","filter" : true},
        {"type":"db","title":"Product Name","tbody":"product_name","width":"10","filter" : true},
        {"type":"db","title":"Schedule","tbody":"schedule","width":"10","filter" : true},
        {"type":"db","title":"Product Type","tbody":"product_type","width":"10","filter" : true},
        {"type":"db","title":"Categories","tbody":"categories","width":"10","filter" : true},
        {"type":"btngroup","title":"Actions","width":"20","btnconfig":[
          {"type":"icon","action":"VIEW","icon":"fa fa-eye","title":"View","color":"green"},
          {"type":"icon","action":"EDIT","icon":"fa fa-edit","title":"Edit","color":"blue"},
          {"type":"icon","action":"PRODUCTITEMS","icon":"fa fa-list","title":"Product Items","color":"gray","returnData":"product_ID"},
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
