import { Product } from '../../model/product-data.model';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { Router } from '@angular/router';
import {  MatTableDataSource} from '@angular/material';

@Component({
  selector: 'gartner-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public productList: Product[];
  public displayedColumns: string[] = ['name', 'description', 'action'];
  public dataSource = new MatTableDataSource<Product>(this.productList);
  
  constructor(private productService: ProductsService, 
              private router: Router) { 
              }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      data => {
        this.dataSource.data = data;
      });
  }

  /**
   * Method to view product details
   */
  public viewProduct(element: Product): void {
    this.router.navigate(["/product", element.ProductId]);
  }

}
