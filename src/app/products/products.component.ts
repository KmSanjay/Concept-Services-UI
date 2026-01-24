import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { BrandCarouselComponent } from '../shared/brand-carousel/brand-carousel.component';


@Component({
  selector: 'app-products',
  imports: [CommonModule,BrandCarouselComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  animations: [
    trigger('cardAnim', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('250ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'scale(0.8)' }))
      ])
    ])
  ]
})
export class ProductsComponent {
products = [
    { id: 1, name: 'SKF Lincoln', image: 'assets/images/skg.jpg' },
    { id: 2, name: 'Shell', image: 'assets/images/skg.jpg' },
    { id: 3, name: 'Victaulic', image: 'assets/images/skg.jpg' },
    { id: 4, name: 'Donaldson', image: 'assets/images/skg.jpg' },
    { id: 5, name: 'Xylem Water Solution', image: 'assets/images/skg.jpg' },
    { id: 6, name: 'Hikoki', image: 'assets/images/skg.jpg' }
  ];

  remove(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }

  // Deal with Brands  List
   brands = [
    { name: 'JK Fenner', image: 'assets/brands/hikoki.png' },
   { name: 'Hikoki', image: 'assets/brands/hikoki.png' },
    { name: 'JK Fenner', image: 'assets/brands/hikoki.png' },
    { name: 'Lincoln', image: 'assets/brands/hikoki.png' }
  ];

  // Key Customers Areas
  customers = [
    { name: 'RSWM', image: 'assets/customers/rswm.png' },
    { name: 'RVUN', image: 'assets/customers/rswm.png' },
    { name: 'SK Khetan', image: 'assets/customers/rswm.png' }
  ];
}
