import {
  Component,
  OnInit
} from '@angular/core';

import {
  AppConstants
} from '../common/app.constants';
import {
  DataService
} from '../services/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Array<any>;


  constructor(private dataSvc: DataService) {
    this.getProductsAsync();
  }

  ngOnInit() { }

  getProductsAsync() {
    this.dataSvc.getDataFromApi(AppConstants.PRODUCTS_API)
      .then(res => {
        this.products = res.products.map(item => {
          item.quantity = 0;
          return item;
        });
      })
      .catch(err => console.log(err));
  }

  add(product) {
    product.quantity++;
    // this.dataSvc.handleCartDict(product);
    this.dataSvc.handleCartObservable(product);
  }

  remove(product) {
    if (product.quantity > 0) {
      product.quantity--;
      // this.dataSvc.handleCartDict(product);
    }
    this.dataSvc.handleCartObservable(product);
  }
}
