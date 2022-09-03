import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { CrudService } from 'src/app/service/crud.service';
import { CartComponent } from '../cart/cart.component';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { R3DeclareInjectorMetadata } from '@angular/compiler';
//import ProductsData from './data.json';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {
  //products: ProductService[] = ProductsData;
  crude: CrudService = new CrudService();
  products: ProductService[] = this.crude.product;

  cartProducts: ProductService[] = [];
  //cartObj: CartComponent = new CartComponent();
  selectedProduct: ProductService | null = null;
  @Input()
  product!: ProductService;
  @Output() selectProduct1 = new EventEmitter();
  injector: any;

  constructor(public data: CrudService,
    activatedRoute: ActivatedRoute) { }
  goToProductDetail(product: ProductService) {
    const router = this.injector.get(Router);
    router.navigate(['product-item-detail', product.id]);
  }
  addToCart(product: ProductService) {
    this.cartProducts.push(product);
    window.alert('Your product has been added to the cart!');
  }
  
  selectProduct(product: any) {
    this.selectedProduct = product;
    console.log('selectedProduct', this.selectedProduct);
  }

  productClicked(product: ProductService) {
    this.selectProduct1.emit(product);
    const router = this.injector.get(Router);
    router.navigate(['product-item-detail', product.id]);
  }
  ngOnInit(): void {
    this.data.currentCartProducts.subscribe(cartProducts => this.cartProducts = cartProducts);
  }

}
