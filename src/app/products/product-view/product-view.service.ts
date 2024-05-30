import { Injectable } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductViewService {

  private product: Product | undefined;

  constructor(private productsService: ProductsService) { }

  getProduct(id: number): Product | undefined {
    const products = this.productsService.getProducts();
    if(products.length !== 0) {
      this.product = products[id];
    }

    return this.product;
  }
}
