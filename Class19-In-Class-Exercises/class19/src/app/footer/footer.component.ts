import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
// Exercise 5:
export class FooterComponent {
  inputText = ''
  showMessage = false

  toggleMessage() {
    this.showMessage = !this.showMessage
  }
}
