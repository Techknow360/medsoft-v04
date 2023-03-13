import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[SmartErrorMessage]'
})
export class SmarterrormessageDirective implements OnChanges {
  @Input() SmartErrorMessage : any
  @Input() SmartLabel : any
  @Input() smartSubmit :  boolean = false
  @Input() smartCustom :  any = []
  
  constructor(private el: ElementRef) {
    this.validation()
   }

   ngOnChanges(): void {
    if(this.smartSubmit){
      this.onSubmitValidation()
    }
   }

   validation(){
    const parent = this.el.nativeElement;
    let previousNode = parent.parentElement;
    let errDiv =  document.createElement('div');
    errDiv.setAttribute('class','text-danger');
    previousNode.append(errDiv);
    ['blur','keyup'].forEach(event =>
      parent.addEventListener(event,()=>{
        let nextNode = parent.nextSibling;
        nextNode.innerHTML  =  this.validationErrorMessages(parent)
    })
    );
   }

   onSubmitValidation(){
    const parent = this.el.nativeElement;
    let previousNode = parent.parentElement;
    let errDiv =  document.createElement('div');
    errDiv.setAttribute('class','text-danger');
    previousNode.append(errDiv);
    let nextNode = parent.nextSibling;
    nextNode.innerHTML  =  this.validationErrorMessages(parent)
   }

   switchErrorValidationMessages(){
    let err  = ''
     for(let smartMessage of this.smartCustom){
        if(this.SmartErrorMessage?.errors?.[smartMessage.error]){
            err = smartMessage?.smartmessage
        }
     }
     return err
   }

   validationErrorMessages(parent){
    if(this.smartCustom && this.switchErrorValidationMessages()){
      return this.switchErrorValidationMessages()
    }else {
      if(!this.SmartLabel){
        let label = parent.previousSibling.innerText;
        this.SmartLabel = label.replace(/[^a-zA-Z ]/g, "");
      }
      let err = ''
      if(this.SmartErrorMessage?.status == 'INVALID'){
        if(this.SmartErrorMessage?.errors?.required){
          err = this.SmartLabel + " is required "
        }else if(this.SmartErrorMessage?.errors?.minlength){
          err = this.SmartLabel + " should contain minimum "+ this.SmartErrorMessage?.errors?.minlength?.requiredLength + " charecters";
        }else if(this.SmartErrorMessage?.errors?.maxlength){
          err = this.SmartLabel + " should contain Maximum "+ this.SmartErrorMessage?.errors?.maxlength?.requiredLength + " charecters";
        }else if(this.SmartErrorMessage?.errors?.pattern || this.SmartErrorMessage?.errors?.invalid){
          err = this.SmartLabel + " is invalid "
        }
      }else{
        err = ''
      }
      return err;
    }
   }
}
