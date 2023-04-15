import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotifyService } from 'src/app/api-services/common/notify.service';
import { SpinnerService } from 'src/app/api-services/common/spinner.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  passwordChangeForm : FormGroup;
  isSubmitted :  boolean = false
  constructor(
    private formBuilder  :  FormBuilder,
    private notify : NotifyService,
    private spinner :  SpinnerService
  ){

  }

  ngOnInit(): void {
    this.createpasswordChangeForm()
  }

  createpasswordChangeForm(){
    this.passwordChangeForm = this.formBuilder.group({
      changePassword  : [null,[Validators.required,Validators.minLength(8),Validators.maxLength(15)]],
      confirmPassword  : [null,[Validators.required,Validators.minLength(8),Validators.maxLength(15)]]
    })
  }

  get passwordChangeControls(){
    return this.passwordChangeForm.controls
  }

  onChangePassword(){
    this.isSubmitted = true
    if(this.passwordChangeForm.valid){

    }else{
      this.notify.error("Please Fill The Required Fields")
    }
  }

}
