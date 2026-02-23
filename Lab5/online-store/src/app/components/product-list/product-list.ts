import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductListComponent implements OnChanges {
  @Input({ required: true }) products: Product[] = [];

  items: Product[] = [];

  @Output() deleteProduct = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['products']) {
      this.items = [...this.products];
    }
  }

  onDelete(productId: number) {
    this.items = this.items.filter(p => p.id !== productId);
    this.deleteProduct.emit(productId);
  }
}
