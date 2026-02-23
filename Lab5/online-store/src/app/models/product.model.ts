export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;     // 1..5
  image: string;      // main image (local assets path)
  images: string[];   // gallery (local assets paths, min 3)
  link: string;       // kaspi.kz URL
  categoryId: number; // category
}
