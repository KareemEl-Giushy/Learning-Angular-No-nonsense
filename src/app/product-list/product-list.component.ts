import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { ProductDetailComponent } from '../products/product-detail/product-detail.component';
import { Product } from '../products/product';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductsService],

})
export class ProductListComponent implements AfterViewInit, OnInit {
  text: string = "Hello World!";
  html: string = "<strong>BBB</strong>";
  myText: string = "Helllll";
  isLiked: boolean = true;
  products: Product[] = [];
  currentClasses: {} = {
    star: true,
    active: true
  };
  currentStyles: {} = {
    color: "red",
    fontSize: "30px",
  }
  selectedProduct: Product | undefined;

  @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined;

  ngAfterViewInit(): void {
    if (this.productDetail) {
      console.log(`from after view init: ${this.productDetail.proD}`);
    }
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }


  constructor(private productService: ProductsService) {
  }

  onClick(): void {
    console.info("Hello World");
  }

  onAddItem(p: Product) {
    window.alert(`You just bought ${p.name}!`);
  }
}
