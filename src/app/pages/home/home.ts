import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Banner {
  image: string;
  title1?: string;
  highlight1?: string;
  title2?: string;
  highlight2?: string;
  title3?: string;
  buttonText?: string;
  buttonLink?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {

  banners: Banner[] = [
    {
      image: 'assets/images/banner1.jpg',
      title1: 'THE BEST',
      highlight1: 'POSSIBLE',
      title2: 'QUALITY OF OUR',
      highlight2: 'PRODUCT RANGE',
      title3: 'AND SERVICES IS MAINTAINED AT ALL TIMES',
      buttonText: 'Read More',
      buttonLink: '/about'
    },
    { image: 'assets/images/banner2.jpg' },
    {
      image: 'assets/images/banner3.jpg',
      title1: 'ENGINEERING',
      highlight1: 'EXCELLENCE',
      title2: 'FOR INDUSTRIAL',
      highlight2: 'SOLUTIONS',
      title3: 'YOU CAN TRUST',
      buttonText: 'Our Products',
      buttonLink: '/products'
    },
    { image: 'assets/images/banner4.jpg' },
    { image: 'assets/images/banner5.jpg' }
  ];

}
