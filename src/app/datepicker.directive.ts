import { Directive, ElementRef, Input, OnInit } from '@angular/core';

declare var jQuery: any;

@Directive({
  selector: '[appDatepicker]'
})
export class DatepickerDirective implements OnInit {
  @Input()
  options: any;

  constructor(private el: ElementRef) {
    // jQuery(this.el.nativeElement).datepicker(this.options);
  }

  ngOnInit() {
    jQuery(this.el.nativeElement).datepicker(this.options);
  }
}
