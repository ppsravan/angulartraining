export class DropdownConfig {
  cssClass: string;
  data: Array<any>;
  selectedValue: string;

  constructor() {
    this.cssClass = '';
    this.data = [{ value: '', text: '' }];
    this.selectedValue = '';
  }
}
