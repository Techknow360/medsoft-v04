import { DatePipe } from '@angular/common';
import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter,OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import * as XLSX from 'xlsx';
import {PaginationInstance} from 'ngx-pagination';


@Component({
  selector: 'app-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.css']
})
export class SmartTableComponent {
  @Input() onChangeTrigger : Subject<boolean>
  @Input('data') data : any[];
  @Input('tconfig') tconfig : any;
  @Input('OnChange') OnChange : boolean = false;
  @Output('bodyAction') bodyAction : EventEmitter<any> = new EventEmitter();
  @Output('headerAction') headerAction : EventEmitter<any> = new EventEmitter();
  @ViewChild('columnfilter') columnfilter:ElementRef;
  page: any = 1;
  count: any = 10;
  colspan : string;
  filter :  string =''
  isFilterEnabled :  boolean = false
  sortDir = 1;
  responsive :  boolean = true
  showItems = [10,25,50,100]
  maxSize: number = 7;
  currentPage : any =[];
  nestedFilter :  any
  nestSearchList : any = []
  dataSource : any
  tabledata :  any = []
  searchText :  string
  totalCount : number  = 0;
  totalFilteredCount : number  = 0;
  showStartCount : number = 0;
  showEndCount :  number = 0;
  tableconfig : any;
  isSearchEnabled :  boolean = false;
  excelExportData : any = []

  constructor(
    private router :  Router,
    private datePipe: DatePipe,
  ) { }


  ngOnChanges(): void {
      this.ngOnInit();
  }

  ngOnInit(): void {
    this.generateExcelSheet();
    this.triggerOnChange();
    this.colspan = this.tconfig.config.length + 1;
    this.tableconfig = this.tconfig.tableconfig
    if(this.tableconfig.pagination){
      this.onShowCount();
      this.searchItems();
      this.showEntries();
      if(this.data != null && this.data?.length > 0){
        this.totalCount = this.data?.length
      }
    }else{
      this.page = 1;
      this.count = this.data?.length
      this.tabledata = this.data
    }
  }


  triggerOnChange(){
    if(this.OnChange){
      this.onChangeTrigger.subscribe(response => {
        if(response){
         this.ngOnInit();
        } 
     })
    }
  }

  sortArr(colName:any){
    if(this.tableconfig.sorting){
      this.sortDir = this.sortDir == 1 ? -1 :1
      this.tabledata?.sort((a :string,b : string)=>{
        a= a[colName].toLowerCase();
        b= b[colName].toLowerCase();
        return a.localeCompare(b) * this.sortDir;
      });
    }
  }


  onPageChange(number : number){
    this.page = number;
    this.showEntries('PAGE');
  }
  
  onShowCount(){
    this.currentPage = []
    if(!this.isSearchEnabled){
      var cpage =  this.data?.length / this.count
    }else{
      var cpage =  this.tabledata?.length / this.count
    }
    if(Math.round(cpage) >= 1){
      for(let i = 1;i<= Math.round(cpage);i++){
        this.currentPage.push(i);
      }
    }else{
      this.currentPage = [1]
      this.page = 1
    }
  }
  
  searchItems() {
    if(this.filter.length > 0 && this.data != undefined  &&  this.data.length > 0){
      this.isSearchEnabled = true
      this.tabledata = this.data?.filter((items) => this.isMatch(items));
      this.showEntries('SEARCH')
    }else{
      this.tabledata = this.data?.filter((items) => this.isMatch(items));
      this.isSearchEnabled = false
    }
   }

   isMatch(item : any) {
    if (item instanceof Object) {
      return Object.keys(item).some((k) => this.isMatch(item[k]));
    } else {
      var searchItem  = this.stringSanitize(item);
      var filterdata  = this.stringSanitize(this.filter);
      return searchItem.indexOf(filterdata) > -1
    }
  }

  coulmnSearch(key : string,event  :  any){
    var sText  = event.target.value;
    if(!this.nestSearchList.includes(key) && sText.length > 0){
      this.nestSearchList.push(key);
    }else if(sText == ''){
      this.nestSearchList.pop(key);
    }
    if(this.filter == '' && this.filter.length <= 0){
      this.tabledata =  this.data.filter((item) => this.nestedSearch(item,key,sText))
    }else{
      this.nestedFilter =  this.tabledata.filter((item) => this.nestedSearch(item,key,sText))
      this.tabledata =  this.nestedFilter;
    }
  }

  nestedSearch(item,key,sText){
    if (item instanceof Object) {
      return  Object.keys(item).some((k) => this.nestedSearch(item[key],key,sText)); ;
    } else {
      var searchItem  = this.stringSanitize(item);
      var filterdata  = this.stringSanitize(sText);
      return searchItem.indexOf(filterdata) > -1
    }
  }

  stringSanitize(value){
   return value.toString().toLowerCase().trim().replace(/\s+/g, "");
  }

  openNewModel(){
   
  }

  showEntries(event?){
    this.onShowCount();
    if(event == 'SHOWCOUNT'){
      this.showStartCount = this.totalCount <= 0 ? 0 : 1
      this.showEndCount = this.count  > this.totalCount ? this.totalCount : this.count
    }
    else if(event == 'PAGE'){
      this.showStartCount =this.page ==1  ? 1  : (this.count * (this.page -1)) + 1
      this.showEndCount = (this.count * this.page)  > this.totalCount ?  this.totalCount : this.count * this.page 
    }else if(event == 'SEARCH'){
      this.showStartCount  = this.tabledata?.length > 0 ? 1  : 0;
      this.showEndCount =  this.tabledata?.length < this.count ? this.tabledata?.length :  this.count 
      this.totalFilteredCount = this.tabledata?.length
    }else{
      this.showStartCount = this.tabledata == undefined || this.tabledata?.length == 0  ? 0 : 1
      this.showEndCount  =  this.tabledata == undefined ?  0 :   this.tabledata?.length < this.count ? this.tabledata?.length : this.count
    }
  }

  onBodyActionClick(type,returnData?,index?){
    this.bodyAction.emit({'Action':type,"index":index,'returnData':returnData});
  }

  onHeaderActionClick(type){
    this.headerAction.emit({'Action':type})
  }

  generateExcelSheet(){
    if(this.data){
      if(this.tconfig?.tableconfig?.excelcond){
        this.data.forEach((tdata)=>{
          let exportdata = {}
          for(let ex of this.tconfig?.config){
              if(ex.export){
                  exportdata[ex.title] =  tdata[ex.tbody]
              }
          }
          this.excelExportData.push(exportdata)
        })
      }
    }
  }

  exportexcel(tableId): void
  {
    let element = document.getElementById(tableId);
    if(this.tconfig?.tableconfig?.excelcond){
      const ws : XLSX.WorkSheet =  XLSX.utils.json_to_sheet(this.excelExportData);
      this.exportTable(tableId,ws)
    }else{
      const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
      this.exportTable(tableId,ws)
    }
  }

  exportTable(tableId,ws){
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb,tableId+'.xlsx');
  }


  readObjectData(obj){
    let result = '';
    for(let data  in obj){
      result += (obj[data] ?  obj[data] : '') + ' '
    }   
    return result
  }

  convertDateFormat(dateobj){
    if(dateobj){
      return this.datePipe.transform((dateobj.year + '-' + (dateobj.month) + '-' + dateobj.day),'dd-MM-yyyy')
    }
    return '-'
  }
}
