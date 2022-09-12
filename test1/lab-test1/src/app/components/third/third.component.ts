import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {


  constructor(private productService: ProductService,private cartService: CartService) {

   }

  ngOnInit() {
  }

  getAllProducts(){
    return this.productService.getAllProducts();
  }
  addToCart(id: number){
    this.cartService.add(id);
  }



}
