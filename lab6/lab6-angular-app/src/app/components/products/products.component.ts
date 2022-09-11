import { Component, OnInit } from '@angular/core';
import { ProductsService} from '../../services/products.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productsService: ProductsService, private cartService: CartService) {

   }

  ngOnInit(): void {
  }

  getAllProduct(){
    return this.productsService.getAllProduct();
  }

  addToCart(p_id: number){
    this.cartService.add(p_id);
  }

}
