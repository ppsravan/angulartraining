import { AppConstants } from './../common/app.constants';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productgrid',
  templateUrl: './productgrid.component.html',
  styleUrls: ['./productgrid.component.css']
})
export class ProductgridComponent implements OnInit {
  products: Array<any>;
  selectedProduct: any;
  displayDialog: boolean;

  constructor(private dataSvc: DataService) {
    this.getProductsAsync();
  }

  ngOnInit() {
  }

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


  onDialogHide() {
    this.displayDialog = false;
  }
}
