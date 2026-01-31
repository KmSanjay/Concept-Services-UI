import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
branches = ['Noida','Prayagraj','Aligarh','Pune','Mumbai'];

  form = {
    name: '',
    email: '',
    phone: '',
    city: '',
    message: ''
  };

  submitForm() {
    console.log('Form Data:', this.form);
    alert('Message sent successfully!');
  }
}
