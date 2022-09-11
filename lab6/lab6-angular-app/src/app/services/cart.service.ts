import { Injectable } from '@angular/core';
import { productsType } from '../products.model';
import { ProductsService} from 'src/app/services/products.service';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  counter: number = 0;
  sumPrice: number = 0;
  cart: productsType = [];

  constructor(private productsService: ProductsService) { }



  add(p_id: number){
    console.log('Add product id: '+p_id+' to cart');
    this.counter += 1;

    this.cart.push(this.productsService.getSomeProduct(p_id));
    this.sumPrice += this.productsService.getSomeProduct(p_id).p_price;
    this.counter = this.cart.length;
  }

  getCounter(){
    return this.counter;
  }

  getsumPrice(){
    return this.sumPrice;
  }

  getCart(){
    return this.cart;
  }

}
