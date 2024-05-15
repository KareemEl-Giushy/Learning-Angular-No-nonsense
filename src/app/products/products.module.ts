import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductComponent } from '../product/product.component';

@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductComponent // Can't be added to declarations because it's a stand-alone component
  ],
  exports: [ProductListComponent]
})
export class ProductsModule { }