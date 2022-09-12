import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {



  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }
  getCart(){
    return this.cartService.getCart();
  }
  getSumPrice(){
    return this.cartService.getSumPrice();
  }

}
