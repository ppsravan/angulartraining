import { Injectable } from '@angular/core';
// Import the Http service from HttpModule
import { Http } from '@angular/http';
// To get promise feature
import { Observable, Subject } from 'rxjs/Rx';
import { AppConstants } from '../common/app.constants';


// Decorate the class as Injectable.
@Injectable()
export class DataService {
  private cartItems = [];

  private cartDict = {};

  private subject: Subject<any>;
  constructor(private httpSvc: Http) {
    this.subject = new Subject<any>();
  }

  handleCartObservable(data) {
    this.subject.next(data);
  }

  getCartDataAsObservable() {
    return this.subject.asObservable();
  }

  handleCartDict(data) {
    if (data.quantity === 0) {
      delete this.cartDict[data._id];
    } else {
      this.cartDict[data._id] = data;
    }
  }

  handleCart(data) {
    let itemFound = false;
    let itemIndex = -1;
    let itemFountAt = -1;

    this.cartItems.forEach(item => {
      itemIndex++;
      if (item._id === data._id) {
        itemFountAt = itemIndex;
        item = data;
        itemFound = true;
      }
    });

    if (!itemFound) {
      this.cartItems.push(data);
    }

    if (itemFound && data.quantity === 0) {
      this.cartItems.splice(itemFountAt, 1);
    }
  }

  getCartItems() {
    return this.cartDict;
  }

  getCountries(): Array<any> {
    return [{
      name: 'India',
      code: 'IN'
    },
    {
      name: 'USA',
      code: 'US'
    },
    {
      name: 'Canada',
      code: 'CAN'
    }
    ];
  }

  getDataFromApi(url) {
    const uri = AppConstants.BASE_URL + url;

    return this.httpSvc.get(uri)
      .map(
      data => {
        return data.json();
      },
      err => {
        return err.json();
      }
      )
      .toPromise();
  }


  getDataFromApiAsObservable(url): Observable<any> {
    const uri = AppConstants.BASE_URL + url;

    return this.httpSvc.get(uri)
      .map(
      data => {
        return data.json();
      },
      err => {
        return err.json();
      });
  }
}
