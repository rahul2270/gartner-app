import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductComponent } from './products/product/product.component';
import { AppRoutingModule } from './routing/routing.module';
import { ProductsService } from './service/products.service';
import { ProductListComponent } from './products/product-list/product-list.component';
import { SharedModule } from './shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GartnerHttpInterceptor } from './gartner.httpinterceptor';
import { HomePageComponent } from './home-page/home-page.component';
import { GenericExceptionComponent } from './generic-exception/generic-exception.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    HomePageComponent,
    GenericExceptionComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    ProductComponent,
    ProductListComponent
  ],
  providers: [
    ProductsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GartnerHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
