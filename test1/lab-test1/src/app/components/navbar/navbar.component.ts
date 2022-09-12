import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }
  getCounter(){
    return this.cartService.counter;
  }

}
