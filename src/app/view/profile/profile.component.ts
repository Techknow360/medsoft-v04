import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { NotifyService } from 'src/app/api-services/common/notify.service';
import { SpinnerService } from 'src/app/api-services/common/spinner.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('staffPurchase') staffPurchase :  any
  passwordChangeForm : FormGroup;
  isSubmitted :  boolean = false
  constructor(
    config: NgbModalConfig,
    private formBuilder  :  FormBuilder,
    private notify : NotifyService,
    private spinner :  SpinnerService,
    private modalServices :  NgbModal,
    private router :  Router
  ){
    config.backdrop = 'static';
    config.keyboard = false;
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

  openStaffPurchase(){
    this.router.navigate(['/staffpurchase'])
  }

}
