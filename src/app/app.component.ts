import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-store1';
  products: ProductService[] = [];

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get('assets/data.json').subscribe(data => {
      console.log(data);
      this.products = data as ProductService[];
    });
  }
}
