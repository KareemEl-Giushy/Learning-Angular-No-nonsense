import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
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

  onClick(): void {
    console.info("Hello World");
  }

  onAddItem(name: string) {
    window.alert(`You just bought ${name}!`);
  }
}
