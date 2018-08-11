import { Product } from '../../model/product-data.model';
import { Component, OnInit } from '@angular/core';
import { Validators, AbstractControl } from '@angular/forms';
import {
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../service/products.service';
import { Category } from '../../model/category-data.model';

@Component({
  selector: 'gartner-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public productGroup: FormGroup;
  public productId: number
  public categoryList: Category[];
  public productName = '';
  public productDesription = '';
  public productUrl = '';
  private categories: number[];
  public selectedCategories: Category[];
  public readOnly = false;
  public title = "Enter Product Details";

  constructor(private productService: ProductsService,
    private fb: FormBuilder,
    private router: Router,
    private activeRoute: ActivatedRoute) {
    this.createForm();
    this.activeRoute.params.subscribe(
      params => {
        this.productId = params['id'];
      }
    );
  }

  ngOnInit() {
    this.retrieveAllCategories();
    this.setProductDetails();
    this.retrieveAllCategories();

  }

  /**
   * Method to create the form
   */
  private createForm(): void {
    this.productGroup = this.fb.group({
      name: [this.productName, [Validators.required, Validators.maxLength(50)]],
      description: [this.productDesription, [Validators.required, Validators.maxLength(200)]],
      url: [this.productUrl, [Validators.maxLength(500)]],
      category: [this.categories]
    });
  }

  /**
   * Method to set the product details retrieved
   * from database to template
   */
  private setProductDetails(): void {
    if (this.productId) {
      this.title = "Product Details";
      this.productService.getProduct(this.productId).subscribe(
        (data: Product) => {
          this.readOnly = true;
          this.name.setValue(data.Name);
          this.description.setValue(data.Description);
          this.url.setValue(data.Url);
          this.setCategoryIds(data.Categories);
        }
      )
    }
  }

  /**
   * Method to update product details
   */
  updateProduct(): void {
    const productDetail: Product = this.populateProduct();
    this.productService.updateProduct(productDetail, this.productId).subscribe(
      () => {
        this.router.navigateByUrl("/productList");
      });
    }

  /**
   * Method to save new product details
   */
  saveProduct(): void {
    const productDetail: Product = this.populateProduct();
    this.productService.saveProduct(productDetail).subscribe(
      () => {
        this.router.navigateByUrl("/productList");
      });
  }

  /**
   * Method to edit details of existing product
   */
  editProduct(): void {
    this.title = "Edit Product Details";
    this.readOnly = false;
  }

  /**
   * Method to retrieve all categories from database
   */
  private retrieveAllCategories(): void {
    this.productService.getCategories().subscribe(
      data => {
        this.categoryList = data;
      }
    )
  }

  /**
   * Helper method to populate the
   * product object
   */
  private populateProduct(): Product {
    const product = new Product();
    product.Name = this.name.value;
    product.Description = this.description.value;
    product.Url = this.url.value;
    product.CategoryIds = this.category.value;
    return product;
  }

  public get name(): AbstractControl {
    return this.productGroup.get('name');
  }

  public get description(): AbstractControl {
    return this.productGroup.get('description');
  }

  public get url(): AbstractControl {
    return this.productGroup.get('url');
  }

  public get category(): AbstractControl {
    return this.productGroup.get('category');
  }

  /**
   * Method to set category ids to template objects
   * @param categories 
   */
  private setCategoryIds(categories: Category[]) : void{
    let categoryIds: number[] = new Array();
    categories.forEach((category) => {
      categoryIds.push(category.CategoryId);
    });
    this.category.setValue(categoryIds);
  }

}
