import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService, Price } from '../cart/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
})
export class ShippingComponent implements OnInit {

  shippingCosts: Observable<Price[]> | undefined;

  constructor(private readonly cartService: CartService) {}

  ngOnInit(): void {
    this.shippingCosts =  this.cartService.getShippingPrices();
  }

}
