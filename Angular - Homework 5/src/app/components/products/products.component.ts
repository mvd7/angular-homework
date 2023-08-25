import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/interfaces/product.interface';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  products_list: Product[] = [];
  private productsSubscription: Subscription;

  constructor(private readonly orderService: OrderService) {}

  ngOnInit(): void {
    this.productsSubscription = this.orderService.getAllProducts.subscribe({
      next: (products: Product[]) => {
        this.products_list = products;
      },
    });
  }

  ngDoCheck(): void {}

  onClickOrder(productId: number) {
    this.orderService.onOrder(productId);
  }

  ngOnDestroy(): void {
    this.productsSubscription.unsubscribe();
  }
}
