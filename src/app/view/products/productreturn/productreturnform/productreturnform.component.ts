import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotifyService } from 'src/app/api-services/common/notify.service';
import { SpinnerService } from 'src/app/api-services/common/spinner.service';

@Component({
  selector: 'app-productreturnform',
  templateUrl: './productreturnform.component.html',
  styleUrls: ['./productreturnform.component.css']
})
export class ProductreturnformComponent {
  productReturnForm! :  FormGroup
  isSubmitted :  boolean = false;
  isEditable : boolean = false;
  constructor(
    private formBuilder  :  FormBuilder,
    private notify : NotifyService,
    private spinner  :  SpinnerService
    ){

  }

  ngOnInit(): void {
      this.createProductReturnForm()
  }

  createProductReturnForm(){
    this.productReturnForm =  this.formBuilder.group({
      billno : [null,[Validators.required]],
      products : [null,[Validators.required]], 
      productitems : [null,[Validators.required]],
      returnquant  : [null,Validators.required],
      retundate : [null,[Validators.required,Validators.maxLength(250)]],
      desc  : [null,Validators.maxLength(250)],
    })
  }
  
  get productReturnFormControl(){
    return this.productReturnForm.controls
  }

  saveproductReturnFormDetails(){
    this.isSubmitted = true
    if(this.productReturnForm.valid){
      this.spinner.show()
    }else{
      this.notify.error("Please Fill The Required Fields")
    }
  }
}
