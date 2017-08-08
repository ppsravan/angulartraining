import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive ({
  selector: '[numbersonly]'
})
export class NumbersOnlyDirective {
  constructor(private el: ElementRef) {
    console.log(el.nativeElement);
  }

  @HostListener('keypress', ['$event'])
  onKeyPress(e) {
    const regex = new RegExp('[0-9]');
    if(!regex.test(e.key))
      e.preventDefault();
  }
}
