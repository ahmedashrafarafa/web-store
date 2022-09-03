import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import ProductsData from '../data.json';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  product: ProductService[] = ProductsData;
  //cartProducts: ProductService[] = [];

  private cartProducts = new BehaviorSubject<ProductService[]>([]);
  currentCartProducts = this.cartProducts.asObservable(); 

  constructor() { 
    console.log(this.product);
  }

  changeCartProducts(cartProducts: ProductService[]) {
    this.cartProducts.next(cartProducts);
  }
  
}
