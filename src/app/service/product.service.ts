import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  id!: number;
    name!: string;
    price!: number;
    url!: string;    
    description!: string;
  constructor() { }
}
