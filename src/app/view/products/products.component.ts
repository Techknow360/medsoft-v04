import { Component, ViewChild } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @ViewChild('vendorsForm') vendorsForm : any
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
      "tableconfig" : {"name":"VendorsDetails","title":"Vendors Details","download": true,"search":true,"showentries":true,"currentpage": false,
      "refresh":true,"showingentries":true,"sorting": true,"pagination":true,"add":false,"colsearch":false,"excelcond":true},
      "config" : [
        // {"type":"db","title":"Product ID","tbody":"product_ID","width":"10","filter" : true},
        {"type":"db","title":"Product Name","tbody":"product_name","width":"10","filter" : true},
        {"type":"db","title":"Schedule","tbody":"schedule","width":"10","filter" : true},
        {"type":"db","title":"Product Type","tbody":"product_type","width":"10","filter" : true},
        {"type":"db","title":"Categories","tbody":"categories","width":"10","filter" : true},
        {"type":"btngroup","title":"Actions","width":"20","btnconfig":[
          {"type":"icon","action":"VIEW","icon":"fa fa-eye","title":"View","color":"green"},
          {"type":"icon","action":"EDIT","icon":"fa fa-edit","title":"Edit","color":"blue"},
          {"type":"icon","action":"PRODUCTITEMS","icon":"fa fa-list","title":"Product Items","color":"gray"},
          {"type":"icon","action":"CANCEL","icon":"fa fa-trash","title":"Cancel Application","color":"red"},
        ]}
      ],
    }

    this.tableData = [
      {product_name:'Dolo 350',schedule:"X",product_type:"Generic",categories:"Syrap"},
      {product_name:'Paracitamal',schedule:"H",product_type:"Others",categories:"Tablets"},
    ]
  }

  onbodyActionClick(type){

  }

  headerActionClick(type){

  }

  createNewVendors(){
    this.modalService.open(this.vendorsForm,{centered:false,size:'lg'})
  }

  closeModal(){
    this.modalService.dismissAll()
  }
}
