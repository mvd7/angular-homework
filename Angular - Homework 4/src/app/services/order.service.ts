import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { PRODUCTS_DATA } from '../data/PRODUCTS-LIST';
import { MyOrders } from '../interfaces/my-orders.interface';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  PRODUCTS_DATA: Product[] = PRODUCTS_DATA;
  // originalData: Product[] = [...this.PRODUCTS_DATA];
  filteredDate: Product[] = [];
  orderedProducts: MyOrders[] = [];

  constructor() {}

  getAllProducts() {
    return this.PRODUCTS_DATA;
  }

  onOrder(productId: number) {
    const existingProduct = this.orderedProducts.find(
      (product) => product.id === productId
    );

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      const productToAdd = this.PRODUCTS_DATA.find(
        (product) => product.id === productId
      );
      if (productToAdd && productToAdd.stock > 0) {
        this.orderedProducts.push({ ...productToAdd, quantity: 1 });
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
  }

  onRemoveFromCart(productId: number) {
    const existingProduct = this.orderedProducts.find(
      (product) => product.id === productId
    );

    if (existingProduct?.quantity === 1) {
      this.orderedProducts = this.orderedProducts.filter(
        (product) => product.id !== productId
      );
    }

    if (existingProduct) {
      existingProduct.quantity -= 1;
    }

    this.PRODUCTS_DATA = this.PRODUCTS_DATA.map((product) => {
      if (productId === product.id) {
        return {
          ...product,
          stock: Math.max(0, product.stock + 1),
        };
      }
      console.log(existingProduct);
      return product;
    });
  }

  getOrderedProducts() {
    return this.orderedProducts;
  }
}
