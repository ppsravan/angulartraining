import { AppComponent } from './../app.component';
import { DropdownConfig } from './../common/dropdown.config';
import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';

import { AppConstants } from '../common/app.constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  profile: any;

  countries: Array<any>;
  dropdownConfiguration: DropdownConfig;

  register() {
    console.log(this.profile);
  }

  constructor(private dataSvc: DataService) {
    this.profile = {};
    this.profile.SelectedCountry = 'IN';
    // this.countries = this.dataSvc.getCountries();
    this.getCountriesAsync();
    this.dropdownConfiguration = new DropdownConfig();
    this.dropdownConfiguration.cssClass = 'form-control';
    this.dropdownConfiguration.selectedValue = 'IN';
  }

  ngOnInit() { }

  countryChanged(val) {
    console.log(val);
    this.profile.SelectedCountry = val;
  }

  getCountriesAsync() {
    this.dataSvc
      .getDataFromApiAsObservable(AppConstants.COUNTRIES_API)
      .subscribe(
      (res) => {
        this.countries = res;
        this.dropdownConfiguration.data = res.map(item => {
          item.value = item.code;
          item.text = item.name;
          return item;
        });
      },
      (err) => {
        console.log(err);
      });
    // this.dataSvc.getDataFromApi(AppConstants.COUNTRIES_API).then(res => {
    //   this.countries = res;
    //   this.dropdownConfiguration.data = res.map(item => {
    //     item.value = item.code;
    //     item.text = item.name;
    //     return item;
    //   });
    //   console.log(res);
    // }).catch(res => {
    //   console.log(res);
    // });
  }
}
