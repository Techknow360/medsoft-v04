import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[smartAutoHeight]'
})
export class SmartautoheightDirective {

  @Input() smartAutoHeight : any = 200

  constructor(
    private elem : ElementRef
  ) { 
    this.dynamicResizeHeight()
  }
  ngafterviewchecked(){
    this.dynamicResizeHeight()
  }

  @HostListener('window:resize', ['$event'])

  dynamicResizeHeight(){
    let screenHight =  screen.height
    let screenAvailabeHeight =  screen.availHeight
    let smartelem =  this.elem.nativeElement
    smartelem.classList.add('overflow-auto')
    this.elem.nativeElement.style.maxHeight = screenAvailabeHeight - 310  +'px'

  }
}















