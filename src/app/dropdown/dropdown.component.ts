import { Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck, SimpleChanges, OnDestroy } from '@angular/core';
import { DropdownConfig } from '../common/dropdown.config';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  @Input()
  configuration: DropdownConfig;

  @Output()
  dropdownChange: EventEmitter<string>;

  valueChanged() {
    this.dropdownChange.emit(this.configuration.selectedValue);
  }

  constructor() {
    this.configuration = new DropdownConfig();
    this.dropdownChange = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    // when the config is reset / initialized
    console.log('on changes event');
  }

  ngDoCheck() {
    // will be fired on any change in the ui. not just this component.
    // console.log('do check');
  }

  ngOnDestroy() {
    console.log('destroy');
  }
}
