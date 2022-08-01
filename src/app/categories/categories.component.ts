import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  content:any =[];
  public data = [];
  public results = [];
  selectedCategory;
  
  constructor(private productService:ProductService,
    private route:Router) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    return this.productService.getCategories().subscribe((results) => {
      this.data = results;

    })
  }

  updateCategory(category) {
    this.productService.selectedCategory.next(category.name);
    this.route.navigate(['/products'])
  }

}
