import { Injectable } from '@angular/core';
import { productsModel } from '../product.model';
import { ProductService } from '../services/product.service';
@Injectable({
  providedIn: 'root'
})

export class CartService {

  cartProduct: productsModel = [];
  total: number = 0
  counter: number = 0;


  constructor(private productsService: ProductService) { }

  add(id:number){
    this.productsService.getQuantity(id);
    this.cartProduct.push(this.productsService.getSomeProduct(id));
    this.counter = this.cartProduct.length;
    this.total += this.productsService.getSomeProduct(id).price;

  }

  getSumPrice() {
    return this.total ;
  }


  getCounter(){
    return this.counter;
  }


  getCart(){
    return this.cartProduct;
  }


}
