import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
})
export class ProductList {
  // Expose global function to the template
  encodeURIComponent = encodeURIComponent;

  products: Product[] = [
    {
      'id': 1,
      'name': 'Смартфон Apple iPhone 17 Pro 256Gb оранжевый',
      'description': 'Apple iPhone 17 Pro в цвете Cosmic Orange (оранжевый) с 256 ГБ встроенной памяти — флагман 2025 года с 6,3-дюймовым дисплеем Super Retina XDR (120 Гц). Смартфон работает на процессоре A19 Pro, имеет 12 ГБ ОЗУ, улучшенную тройную камеру 48 Мп с 8-кратным зумом и разъем USB-C. Отличается алюминиевым корпусом, ИИ-функциями (Apple Intelligence) и поддержкой 5G, Wi-Fi 7',
      'price': 771806,
      'rating': 4.9,
      'images': [
        'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc3/p95/64168416.png?format=gallery-medium'
      ],
      'link': 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000'
    },
    {'id': 2,
      'name': 'Смартфон Apple iPhone 15 128Gb черный',
      'description': 'Apple iPhone 15 128GB (Black) — это флагманский смартфон 2023 года с 6,1-дюймовым OLED-дисплеем Super Retina XDR, Dynamic Island, процессором A16 Bionic и разъемом USB-C. Основная камера 48 Мп обеспечивает высокую детализацию, поддерживается 5G, беспроводная зарядка MagSafe и защита от воды IP68. Корпус выполнен из алюминия и прочного стекла',
      'price': 389868,
      'rating': 4.9,
      'images': [
        'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hbf/h6b/86275143598110.jpg?format=gallery-medium'
      ],
      'link': 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000'
    },
    {'id': 3,
    'name':'Смартфон Apple iPhone 13 128Gb черный',
    'description': 'Apple iPhone 13 128GB (Black) — это флагманский смартфон 2021 года с 6,1-дюймовым OLED-дисплеем Super Retina XDR, процессором A15 Bionic и разъемом Lightning. Основная камера 12 Мп обеспечивает высокую детализацию, поддерживается 5G, беспроводная зарядка MagSafe и защита от воды IP68. Корпус выполнен из алюминия и прочного стекла',
    'price': 305000,
    'rating': 4.9,
    'images': [
        'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium'
      ],
      'link': 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
    },
    {
      'id': 4,
      'name': 'Смартфон Apple iPhone 17 Pro 256Gb оранжевый',
      'description': 'Apple iPhone 17 Pro в цвете Cosmic Orange (оранжевый) с 256 ГБ встроенной памяти — флагман 2025 года с 6,3-дюймовым дисплеем Super Retina XDR (120 Гц). Смартфон работает на процессоре A19 Pro, имеет 12 ГБ ОЗУ, улучшенную тройную камеру 48 Мп с 8-кратным зумом и разъем USB-C. Отличается алюминиевым корпусом, ИИ-функциями (Apple Intelligence) и поддержкой 5G, Wi-Fi 7',
      'price': 819585,
      'rating': 4.9,
      'images': [
        'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc3/p95/64168416.png?format=gallery-medium'
      ],
      'link': 'https://kaspi.kz/shop/p/apple-iphone-17-pro-max-256gb-oranzhevyi-145468241/?c=750000000'
    },
    {'id': 5,
      'name': 'Смартфон Apple iPhone 17 Pro 256Gb темно-синий',
      'description': 'Apple iPhone 17 Pro в цвете Midnight Blue (темно-синий) с 256 ГБ встроенной памяти — флагман 2025 года с 6,3-дюймовым дисплеем Super Retina XDR (120 Гц). Смартфон работает на процессоре A19 Pro, имеет 12 ГБ ОЗУ, улучшенную тройную камеру 48 Мп с 8-кратным зумом и разъем USB-C. Отличается алюминиевым корпусом, ИИ-функциями (Apple Intelligence) и поддержкой 5G, Wi-Fi 7',
      'price': 739440,
      'rating': 4.9,
      'images': [
        'https://resources.cdn-kaspi.kz/img/m/p/p85/p81/64167660.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p37/p7a/64463536.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p2a/p84/64167657.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf1/p83/64167659.png?format=gallery-medium'
      ],
      'link': 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-temno-sinii-145438959/?c=750000000'
    },
    {'id': 6,
      'name': 'Смартфон Apple iPhone 16 128Gb черный',
      'description': 'Apple iPhone 16 128GB (Black) — это флагманский смартфон 2024 года с 6,1-дюймовым OLED-дисплеем Super Retina XDR, процессором A18 Bionic и разъемом Lightning. Основная камера 12 Мп обеспечивает высокую детализацию, поддерживается 5G, беспроводная зарядка MagSafe и защита от воды IP68. Корпус выполнен из алюминия и прочного стекла',
      'price': 449750,
      'rating': 4.9,
      'images': [
        'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he0/ha4/87295470764062.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h12/hfe/87295470796830.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hff/h15/87295470829598.png?format=gallery-medium'
      ],
      'link': 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000'
    },
    {
      'id': 7,
      'name': 'Смартфон Apple iPhone 13 128Gb белый',
      'description': 'Apple iPhone 13 128GB (White) — это флагманский смартфон 2021 года с 6,1-дюймовым OLED-дисплеем Super Retina XDR, процессором A15 Bionic и разъемом Lightning. Основная камера 12 Мп обеспечивает высокую детализацию, поддерживается 5G, беспроводная зарядка MagSafe и защита от воды IP68. Корпус выполнен из алюминия и прочного стекла',
      'price': 315284,
      'rating': 4.9,
      'images': [
        'https://resources.cdn-kaspi.kz/img/m/p/hc9/h90/64209083007006.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3b/h93/64209085235230.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h8f/hce/64209121476638.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h4b/h84/64209123573790.jpg?format=gallery-medium'
      ],
      'link': 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000'
    },
    {
      'id': 8,
      'name': 'Смартфон Apple iPhone 17 Pro 256Gb серебристый',
      'description': 'Apple iPhone 17 Pro в цвете Silver (серебристый) с 256 ГБ встроенной памяти — флагман 2025 года с 6,3-дюймовым дисплеем Super Retina XDR (120 Гц). Смартфон работает на процессоре A19 Pro, имеет 12 ГБ ОЗУ, улучшенную тройную камеру 48 Мп с 8-кратным зумом и разъем USB-C. Отличается алюминиевым корпусом, ИИ-функциями (Apple Intelligence) и поддержкой 5G, Wi-Fi 7',
      'price': 778456,
      'rating': 5.0,
      'images': [
        'https://resources.cdn-kaspi.kz/img/m/p/pb3/p40/64168003.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd4/p66/64464588.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7b/p40/64168005.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p43/p40/64168007.png?format=gallery-medium'
      ],
      'link': 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-serebristyi-145467562/?c=750000000'
    },
    {
      'id': 9,
      'name': 'Смартфон Apple iPhone 17 Pro Max 256Gb серебристый',
      'description': 'Apple iPhone 17 Pro Max в цвете Silver (серебристый) с 256 ГБ встроенной памяти — флагман 2025 года с 6,7-дюймовым дисплеем Super Retina XDR (120 Гц). Смартфон работает на процессоре A19 Pro, имеет 12 ГБ ОЗУ, улучшенную тройную камеру 48 Мп с 8-кратным зумом и разъем USB-C. Отличается алюминиевым корпусом, ИИ-функциями (Apple Intelligence) и поддержкой 5G, Wi-Fi 7',
      'price': 848835,
      'rating': 5.0,
      'images': [
        'https://resources.cdn-kaspi.kz/img/m/p/p72/p55/64169948.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p97/pb0/64475614.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p8e/p55/64169949.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p16/p58/64169951.png?format=gallery-medium'
      ],
      'link': 'https://kaspi.kz/shop/p/apple-iphone-17-pro-max-256gb-serebristyi-145468150/?c=750000000'
    },
    {
      'id': 10,
      'name': 'Смартфон Apple iPhone 17 Pro Max 256Gb темно-синий',
      'description': 'Apple iPhone 17 Pro Max в цвете Midnight Blue (темно-синий) с 256 ГБ встроенной памяти — флагман 2025 года с 6,7-дюймовым дисплеем Super Retina XDR (120 Гц). Смартфон работает на процессоре A19 Pro, имеет 12 ГБ ОЗУ, улучшенную тройную камеру 48 Мп с 8-кратным зумом и разъем USB-C. Отличается алюминиевым корпусом, ИИ-функциями (Apple Intelligence) и поддержкой 5G, Wi-Fi 7',
      'price': 794400,
      'rating': 5.0,
      'images': [
        'https://resources.cdn-kaspi.kz/img/m/p/pd9/pf2/64169612.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p65/p0f/64476280.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pbc/pf2/64169613.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p84/pf2/64169615.png?format=gallery-medium'
      ],
      'link': 'https://kaspi.kz/shop/p/apple-iphone-17-pro-max-256gb-temno-sinii-145440732/?c=750000000'
    }
  ]
}
