import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts() {
    return [
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
}
