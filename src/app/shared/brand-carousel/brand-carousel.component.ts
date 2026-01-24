import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-brand-carousel',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './brand-carousel.component.html',
  styleUrl: './brand-carousel.component.css'
})
export class BrandCarouselComponent {
@Input() title = '';
  @Input() logos: { name: string; image: string }[] = [];
}
