import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Product} from "../../model/product.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  //? pour dire optionel ou utiliser =null
  products:Product[]|null=null;
  constructor(private productService:ProductsService) { }
  ngOnInit(): void {
  }

  onGetAllProducts() {
    this.productService.getAllProducts().subscribe(data=>{
      this.products=data;
    })
  }
}
