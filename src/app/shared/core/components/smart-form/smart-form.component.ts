import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart-form',
  templateUrl: './smart-form.component.html',
  styleUrls: ['./smart-form.component.css']
})
export class SmartFormComponent implements OnInit {
  @Input('FormConfig') FormConfig : any
  @Input('FormData') FormData : any
  
  constructor(){

  }

  ngOnInit(): void {
    
  }
}
