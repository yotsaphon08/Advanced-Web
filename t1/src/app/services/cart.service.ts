import { Injectable } from '@angular/core';
import { productsModel } from '../product.model'
import { ProductService } from "../services/product.service";

@Injectable({
  providedIn: 'root'
})

export class CartService {

  cartProduct: productsModel = [];
  total: number = 0;
  count: number = 0;

  constructor(private productService: ProductService) { }

  addToCart(id:number){
    this.getQuantity(id);
    this.cartProduct.push(this.productService.getSomeProduct(id));
    this.count = this.cartProduct.length;
    this.total += this.productService.getSomeProduct(id).price;
  }

  getCount(){
    return this.count ;
  }

  getTotal(){
    return this.total ;
  }

  getCartProducts(){
    return this.cartProduct ;
  }

  getQuantity(id:number){
    return this.productService.getSomeProduct(id).quantity -= 1 ;
  }

}
