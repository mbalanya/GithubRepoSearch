import { Directive } from '@angular/core';
import { ElementRef } from "@angular/core";

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  element: ElementRef

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = 'blue'
    this.element = el
  }

  ngOnInit(){
    this.el.nativeElement.innerText += ' Github Repo Search App '
  }
}
