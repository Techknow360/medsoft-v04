import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-constform',
  templateUrl: './constform.component.html',
  styleUrls: ['./constform.component.css']
})
export class ConstformComponent {
  vendorsForm! :  FormGroup
  isSubmitted :  boolean = false;
  isEditable : boolean = false;
  constructor(private formBuilder  :  FormBuilder){

  }

  ngOnInit(): void {
      this.createConstantForm()
  }

  createConstantForm(){
    this.vendorsForm =  this.formBuilder.group({
      type : [null,[Validators.required]],
      constID : [null,[Validators.required]], 
      contValue : [null,[Validators.required]],
      desc  : [null,Validators.required],
    })
  }
  
  get vendorsFormControl(){
    return this.vendorsForm.controls
  }

  saveConstantFormDetails(){
    this.isSubmitted = true
  }
}
