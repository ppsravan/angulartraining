import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { DropdownConfig } from '../common/dropdown.config';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit, OnChanges {
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

  ngOnChanges() {
    console.log('on changes event');
  }

}
