import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import ProductsData from '../data.json';
import { ProductService } from './product.service';
import { HttpClient, HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  products: ProductService[] = [];
  product: ProductService[] = ProductsData;
  //cartProducts: ProductService[] = [];

  private cartProducts = new BehaviorSubject<ProductService[]>([]);
  currentCartProducts = this.cartProducts.asObservable(); 
  http!: HttpClient;

  constructor() {}
  ngOnInit(): void {
    this.http.get('assets/data.json').subscribe(data => {
      console.log(data);
      this.products = data as ProductService[];
    });
  }

  changeCartProducts(cartProducts: ProductService[]) {
    this.cartProducts.next(cartProducts);
  }
  
}
