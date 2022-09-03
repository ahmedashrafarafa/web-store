import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { CrudService } from 'src/app/service/crud.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  crude: CrudService = new CrudService();
  products: ProductService[] = this.crude.product;
  router: any;
  cartProducts: ProductService[] = [];
  inProduct: ProductService | null = null;
  errorMessage = '';
  
  @Input()
  product: any;
  @Output() selectProduct = new EventEmitter();

  constructor(
    private data:CrudService,
    private route: ActivatedRoute,
    private cartService: CartService
    ) { }

  ngOnInit(): void {
    this.data.currentCartProducts.subscribe(cartProducts => this.cartProducts = cartProducts);
    
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getProduct(id);
    }

    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = this.products.find(product => product.id === productIdFromRoute);
  }
  /*
  addToCart(product: ProductService) {
    this.cartProducts.push(product);
    window.alert('Your product has been added to the cart!');
  }*/
  getProduct(id: number): void {
    this.product.getProduct(id).subscribe({
      next: (product: any) => this.product = product,
      error: (err: string) => this.errorMessage = err
    });
  }

  addToCart(product: ProductService) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  getDetail(product: ProductService) {
    this.selectProduct.emit(product);
  }
  productClicked(product: ProductService) {
    this.selectProduct.emit(product);
  }
}
