import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts: ProductService[] = [];

  constructor(private router:Router) { }

  addToCart(product: ProductService) {
    this.cartProducts.push(product);
  }

  getItems() {
    return this.cartProducts;
  }

  clearCart() {
    this.cartProducts = [];
    return this.cartProducts;
  }

  goToProductDetail(product: ProductService) {
    this.router.navigate(['/product-item-detail', product.id]);
  }
}
