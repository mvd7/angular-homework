import { Component, DoCheck, OnInit } from '@angular/core';
import { MyOrders } from 'src/app/interfaces/my-orders.interface';

import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss'],
})
export class MyOrdersComponent implements OnInit, DoCheck {
  constructor(private readonly orderService: OrderService) {}

  orderedProducts: MyOrders[] = [];

  ngOnInit(): void {
    this.orderedProducts = this.orderService.getOrderedProducts();
  }

  ngDoCheck(): void {
    this.orderedProducts = this.orderService.getOrderedProducts();
  }

  onRemoveFromCart(productId: number) {
    this.orderService.onRemoveFromCart(productId);
  }
}
