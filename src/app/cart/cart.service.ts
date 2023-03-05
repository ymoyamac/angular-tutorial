import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../products';

export interface Price {
  type: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];

  constructor(private readonly http: HttpClient) {}

  getShippingPrices(): Observable<Price[]> {
    return this.http.get<Price[]>('/assets/shipping.json');
  }

  addToCart(product: Product): void {
    this.items.push(product);
  }

  getItems(): Product[] {
    return this.items;
  }

  clearCart(): Product[] {
    for (const item in this.items) {
      console.log(item);
    }
    this.items = [];
    return this.items;
  }

}
