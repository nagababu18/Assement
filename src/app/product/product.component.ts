import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  content:any =[];
  public data = [];
  public results = [];
  selectedCategory = '';
  
  constructor(private productService:ProductService,
    private route:ActivatedRoute) { 
      this.selectedCategory = this.productService.selectedCategory.value
    }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    return this.productService.getProducts(this.selectedCategory).subscribe((results) => {
      this.data = results.content;

    })
  }

}
