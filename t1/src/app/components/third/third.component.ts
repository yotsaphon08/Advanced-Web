import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  constructor(private productService: ProductService, private cartService: CartService) {
    
   }

  ngOnInit(): void {
  }

  getAllProduct(){
    return this.productService.getAllProduct();
  }

  AddToCart(id:number){
    return this.cartService.addToCart(id);

  }
}
