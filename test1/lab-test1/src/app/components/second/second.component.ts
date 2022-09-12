import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  productForm = new FormGroup({
    type: new FormControl("",[Validators.required]),
    id: new FormControl("",[Validators.required]),
    name: new FormControl("",[Validators.required]),
    detail: new FormControl("",[Validators.required]),
    quantity: new FormControl("",[Validators.required,Validators.min(1), Validators.max(50)]),
    price: new FormControl("",[Validators.required,Validators.min(1), Validators.max(100000)]),

  });

  productType: string[] = ['','CPU','RAM','HDD','Mainboard'];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }
  get Check(){
    return this.productForm.controls;
  }


  addProduct(){
    this.productService.products.push(this.productForm.value as any);
  }



}
