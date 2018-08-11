import { GenericExceptionComponent } from './../generic-exception/generic-exception.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { ProductComponent } from "../products/product/product.component";
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from '../products/product-list/product-list.component';

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'productList', component: ProductListComponent },
    { path: 'product/:id', component: ProductComponent },
    { path: 'product', component: ProductComponent },
    { path: 'exception', component: GenericExceptionComponent}
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule {}
  