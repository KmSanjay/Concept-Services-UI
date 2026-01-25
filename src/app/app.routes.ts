import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home';

export const routes: Routes = [ 
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'contact-us', component: ContactUsComponent },
];

