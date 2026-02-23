import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItemComponent {
  @Input({ required: true }) product!: Product;
  @Output() delete = new EventEmitter<number>();

  selectedImageIndex = 0;

  get mainImage(): string {
    return this.product.images[this.selectedImageIndex] ?? this.product.images;
  }

  selectImage(i: number) {
    this.selectedImageIndex = i;
  }

  like() {
    this.product.rating += 0.01;
  }

  requestDelete() {
    const ok = confirm(`Delete "${this.product.name}"?`);
    if (ok) this.delete.emit(this.product.id);
  }

  openKaspi() {
    window.open(this.product.link, '_blank', 'noopener,noreferrer');
  }

  shareWhatsApp() {
    const text = `Check out this product: ${this.product.link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  shareTelegram() {
    const url =
      `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  stars(rating: number): { filled: boolean; half: boolean }[] {
    const out: { filled: boolean; half: boolean }[] = [];
    for (let i = 1; i <= 5; i++) {
      const diff = rating - i;
      if (diff >= 0) out.push({ filled: true, half: false });
      else if (diff >= -0.5) out.push({ filled: false, half: true });
      else out.push({ filled: false, half: false });
    }
    return out;
  }

  formatKzt(value: number): string {
    if (!value) return '— ₸';
    return `${Math.round(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} ₸`;
  }
}
