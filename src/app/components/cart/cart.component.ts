import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { ProductListComponent } from '../product-list/product-list.component';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: ProductService[] = [];
  totalPrice: number = 0;

  constructor(private data: CrudService) { }
  
  ngOnInit(): void {
    this.data.currentCartProducts.subscribe(cartProducts => this.cartProducts = cartProducts);
    for (let i = 0; i < this.cartProducts.length; i++) {
      this.totalPrice += this.cartProducts[i].price;
    }
  }

}
