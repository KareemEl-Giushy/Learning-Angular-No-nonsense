import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ProductDetailComponent } from '../products/product-detail/product-detail.component';
import { Product } from '../products/product';

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
  products: Product[] = [
    {
      name:"WebCam",
      price: 100
    },
    {
      name:"Microphone",
      price: 50
    },
    {
      name:"Wireless Keyboard",
      price: 30
    }
  ];
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


  constructor() {
    this.products = [
      ...this.products,
      {
        name:"WebCam",
        price: 100
      },
      {
        name:"Microphone",
        price: 50
      },
      {
        name:"Wireless Keyboard",
        price: 30
      }
    ]
  }

  onClick(): void {
    console.info("Hello World");
  }

  onAddItem(p: Product) {
    window.alert(`You just bought ${p.name}!`);
  }
}
