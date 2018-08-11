import { dataService } from '../const/data.service';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product-data.model';

@Injectable()
export class ProductsService {

  private productUrl: string;
  private categoryUrl: string;

  constructor(private http: HttpClient) { 
    this.productUrl = environment.product_url + dataService.products;
    this.categoryUrl = environment.product_url + dataService.categories;
  }

  /**
   * Method to get all the categories
   */
  public getCategories(): Observable<any>{
    return this.http.get(this.categoryUrl);
  }

  /**
   * Method to get all the products
   */
  public getProducts(): Observable<any>{
    return this.http.get(this.productUrl);
  }

  /**
   * Method to get a product based on Id
   */
  public getProduct(productId: number): Observable<any>{
    return this.http.get(this.getProductUrlWithId(productId));
  }

  /**
   * Method to save a new product
   */
  public saveProduct(product: Product): Observable<any>{
    return this.http.post(this.productUrl, JSON.stringify(product));
  }

  /**
   * Method to update a product
   */
  public updateProduct(product: Product, productId: number): Observable<any>{
    return this.http.put(this.getProductUrlWithId(productId), JSON.stringify(product));
  }

  private getProductUrlWithId(productId: number): string {
    return this.productUrl + '/' + productId;
  }
}
