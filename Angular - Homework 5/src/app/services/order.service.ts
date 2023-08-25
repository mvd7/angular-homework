import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { PRODUCTS_DATA } from '../data/PRODUCTS-LIST';
import { MyOrders } from '../interfaces/my-orders.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  PRODUCTS_DATA: Product[] = PRODUCTS_DATA;
  orderedProducts: MyOrders[] = [];
  constructor() {}

  // getAllProducts = new Observable<Product[]>((observer) => {
  //   observer.next(this.PRODUCTS_DATA);
  // });

  getAllProducts = new BehaviorSubject<Product[]>(this.PRODUCTS_DATA);

  onOrder(productId: number) {
    const existingProduct = this.orderedProducts.find(
      (product) => product.id === productId,
    );

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      const productToAdd = this.PRODUCTS_DATA.find(
        (product) => product.id === productId,
      );
      if (productToAdd && productToAdd.stock > 0) {
        this.orderedProducts = [{ ...productToAdd, quantity: 1 }];
      }
    }

    this.PRODUCTS_DATA = this.PRODUCTS_DATA.map((product) => {
      if (productId === product.id) {
        return {
          ...product,
          stock: product.stock - 1,
        };
      }

      return product;
    });

    this.getAllProducts.next(this.PRODUCTS_DATA);
  }

  onRemoveFromCart(productId: number) {
    const existingProduct = this.orderedProducts.find(
      (product) => product.id === productId,
    );

    if (existingProduct?.quantity === 1) {
      this.orderedProducts = this.orderedProducts.filter(
        (product) => product.id !== productId,
      );
    }

    if (existingProduct) {
      existingProduct.quantity -= 1;
    }

    this.PRODUCTS_DATA = this.PRODUCTS_DATA.map((product) => {
      if (productId === product.id) {
        return {
          ...product,
          stock: product.stock + 1,
        };
      }

      return product;
    });

    this.getAllProducts.next(this.PRODUCTS_DATA);
  }

  getOrderedProducts() {
    return this.orderedProducts;
  }
}
