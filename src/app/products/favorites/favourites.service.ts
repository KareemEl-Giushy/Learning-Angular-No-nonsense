import { Injectable } from '@angular/core';
import { ProductsService } from '../products.service';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService extends ProductsService {

  constructor() { super()}

  override getProducts(): { name: string; price: number; }[] {
    return super.getProducts().slice(1, 3)
  }
}
