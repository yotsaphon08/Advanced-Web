import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from "../../services/product.service" ;

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  productForm = new FormGroup({
    type: new FormControl('', [Validators.required]),
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    detail: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required, Validators.min(1), Validators.max(50)]),
    price: new FormControl('', [Validators.required, Validators.min(1), Validators.max(100000)]),
  });
  
  productType: string[] = ['', 'CPU','RAM','HDD','Mainboard'];

  get p() {
    return this.productForm.controls;
  }

  constructor(private productService: ProductService) {  }

  ngOnInit(): void {
  }

  addProduct(){
    if(this.productForm.status == 'VALID'){
      this.productService.products.push(this.productForm.value as any)
      alert("Add Success!")
      this.productForm.reset();
    }else {
      alert("Add Fail!")
    }
  }

}
