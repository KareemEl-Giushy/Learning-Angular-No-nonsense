import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ProductDetailComponent } from '../products/product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements AfterViewInit {
  text: string = "Hello World!";
  html: string = "<strong>BBB</strong>";
  myText: string = "Helllll";
  isLiked: boolean = true;
  currentClasses: {} = {
    star: true,
    active: true
  };
  currentStyles: {} = {
    color: "red",
    fontSize: "30px",
  }
  selectedProduct: string = "";

  @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined;

  ngAfterViewInit(): void {
    if (this.productDetail) {
      console.log(`from after view init: ${this.productDetail.proD}`);
    }
  }

  onClick(): void {
    console.info("Hello World");
  }

  onAddItem(name: string) {
    window.alert(`You just bought ${name}!`);
  }
}
