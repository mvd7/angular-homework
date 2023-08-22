import { Component, DoCheck, OnInit } from '@angular/core';
import { PRODUCTS_DATA } from 'src/app/data/PRODUCTS-LIST';
import { Product } from 'src/app/interfaces/product.interface';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements DoCheck, OnInit {
  constructor(private readonly orderService: OrderService) {}

  products_list: Product[] = [];
  original_products: Product[] = [];

  ngDoCheck(): void {
    this.products_list = this.orderService.getAllProducts();
  }

  ngOnInit(): void {
    this.products_list = this.orderService.getAllProducts();
  }

  onClickOrder(productId: number) {
    this.orderService.onOrder(productId);
    this.products_list = this.orderService.getAllProducts();
  }
}
