import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[SmartErrorMessage]'
})
export class SmarterrormessageDirective implements OnChanges {
  @Input() SmartErrorMessage : any
  @Input() SmartLabel : any
  @Input() smartSubmit :  boolean = false
  
  constructor(private el: ElementRef) {
    console.log("On Triggered");

   }

   ngOnChanges(): void {
    console.log("On Change Triggered");
      this.validation();
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
        nextNode.innerHTML  =  this.validationErrorMessages()
    })
    );
   }


   validationErrorMessages(){
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
