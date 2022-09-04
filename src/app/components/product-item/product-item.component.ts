import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { CrudService } from 'src/app/service/crud.service';
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  crude: CrudService = new CrudService();
  //products: ProductService[] = this.crude.product;
  router: any;
  cartProducts: ProductService[] = [];
  //cartservice: CartService = new CartService(this.router);
  //product: ProductService | null = null;

  selectedProduct: ProductService | null = null;
  @Input()
  product!: ProductService;
  @Output() selectProduct = new EventEmitter();
  injector: any;
  
  constructor(private data: CrudService) { }

  goToProductDetail(product: ProductService) {
    const router = this.injector.get(Router);
    router.navigate(['product-item-detail', product.id]);
  }
  addToCart(product: ProductService) {
    this.cartProducts.push(product);
    window.alert('Your product has been added to the cart!');
  }
  productClicked(product: ProductService) {
    this.selectProduct.emit(product);
    const router = this.injector.get(Router);
    router.navigate(['product-item-detail', product.id]);
  }

  selectProduct1(product: any) {
    this.selectedProduct = product;
    console.log('selectedProduct', this.selectedProduct);
  }

  ngOnInit(): void {
    this.data.currentCartProducts.subscribe(cartProducts => this.cartProducts = cartProducts);
  }

}
