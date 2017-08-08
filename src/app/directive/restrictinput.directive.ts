import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive ({
  selector: '[appRestrictedInput]'
})
export class RestrictedInputDirective {
  @Input()
  expression: string;
  constructor(private el: ElementRef) {
    console.log(el.nativeElement);
  }

  @HostListener('keypress', ['$event'])
  onKeyPress(e) {
    const regex = new RegExp(this.expression);
    if (!regex.test(e.key)) {
      e.preventDefault();
    }
  }
}
