import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[smartMandatory]'
})
export class SmartmandatoryDirective {
  constructor(private el : ElementRef) { 
    this.createMandatoryIcon();
  }

  createMandatoryIcon(){
    let parent = this.el.nativeElement;
    let span =  document.createElement('span');
    span.classList.add('madatory-filed')
    span.innerText = ' * '
    parent.append(span)
  }

}
