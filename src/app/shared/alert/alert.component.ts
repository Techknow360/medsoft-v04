import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  @Output('alertActions') alertActions : EventEmitter<any> = new EventEmitter();
  @ViewChild('alertModel')  alertModel : any
  @Input('header') header :  string = 'Alert';
  @Input('questions') questions :  string = "Are You Sure ? Do You  Want To Delete ?";
  constructor(
    public modalService: NgbModal,
  ) {}

  ngOnInit(): void {
   
  }

  ngAfterViewInit(){
    this.modalService.open(this.alertModel,{size:'sm',centered:true})
  }

  close(){
    this.modalService.dismissAll();
  }

  onConfirmation(value){
    this.alertActions.emit(value);
  }
  
  ngOnDestroy(){
    this.modalService.dismissAll()
  }
}
