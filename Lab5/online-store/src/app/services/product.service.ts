import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';
import { CATEGORIES } from '../data/categories';
import { PRODUCTS } from '../data/products';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private categories: Category[] = [...CATEGORIES];

  private products: Product[] = PRODUCTS.map(p => ({ ...p }));

  getCategories(): Category[] {
    return [...this.categories];
  }

  getProductsByCategoryId(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }

  deleteProduct(productId: number): void {
    this.products = this.products.filter(p => p.id !== productId);
  }
}
