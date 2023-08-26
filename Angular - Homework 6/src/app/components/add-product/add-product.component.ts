import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../interfaces/product.interface';
import { OrderService } from '../../services/order.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  constructor(private readonly orderService: OrderService) {}

  products_list: Product[] = [];
  private productsSubscription: Subscription;

  newProductForm: FormGroup;

  allowedCategories = ['Electronics', 'Clothing', 'Books', 'Sports'];
  ngOnInit(): void {
    this.productsSubscription = this.orderService.getAllProducts.subscribe({
      next: (products: Product[]) => {
        this.products_list = products;
      },
    });
    this.initForm();
  }

  newProductFormValue: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    category: 'Electronics',
    stock: 0,
  };

  getNextProductId(): number {
    const maxId = Math.max(...this.products_list.map((product) => product.id));
    return maxId + 1;
  }

  initForm(): void {
    const nextProductId = Number(this.getNextProductId());

    this.newProductForm = new FormGroup({
      id: new FormControl(nextProductId),
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(99),
      ]),
      price: new FormControl(1, [Validators.min(1), Validators.required]),
      category: new FormControl('Electronics', [
        Validators.required,
        this.categoryValidator,
      ]),
      stock: new FormControl(1, [Validators.min(1), Validators.required]),
    });
  }

  onSubmitForm(): void {
    const newProduct: Product = {
      id: this.getNextProductId(),
      name: this.newProductForm.get('name')?.value,
      description: this.newProductForm.get('description')?.value,
      price: this.newProductForm.get('price')?.value,
      category: this.newProductForm.get('category')?.value,
      stock: this.newProductForm.get('stock')?.value,
    };

    this.products_list.push(newProduct);
    this.orderService.addNewProduct(this.products_list);

    this.newProductForm.reset();
  }

  categoryValidator = (
    control: FormControl,
  ): { [key: string]: boolean } | null => {
    if (!this.allowedCategories.includes(control.value)) {
      return { invalidCategory: true };
    }
    return null;
  };

  ngOnDestroy(): void {
    this.productsSubscription.unsubscribe();
  }
}
