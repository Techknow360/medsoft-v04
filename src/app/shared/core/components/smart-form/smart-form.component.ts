import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'smart-form',
  templateUrl: './smart-form.component.html',
  styleUrls: ['./smart-form.component.css']
})
export class SmartFormComponent implements OnInit {
  @Input('label') label : any
  @Input('filedName') filedName : any
  @Input('FormControl') FormControl : any
  @Input('isSubmitted') isSubmitted :  any
  @Input('isEditable') isEditable :  any
  @Input('placeholder') placeholder :  any

  constructor(){

  }

  ngOnInit(): void {
    
  }
}
