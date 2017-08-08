import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  cart: any;
  cartLength: number;
  constructor(private dataSvc: DataService) {
    // this.cart = this.dataSvc.getCartItems();
    this.cart = {};
    this.dataSvc.getCartDataAsObservable()
      .subscribe(x => {
        if (x.quantity === 0) {
          delete this.cart[x._id];
        } else {
          this.cart[x._id] = x;
        }
      });
  }

  getCartLength() {
    let totalQuantity = 0;
    Object.keys(this.cart).forEach(function (key, index) {
      totalQuantity += this[key].quantity;
    }, this.cart);
    return 'I:' + Object.keys(this.cart).length + 'Q:' + totalQuantity;
  }
}
