import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'Welcome to Angular!'
  description = 'This is a quick intro to Angular Components!!'
  inputText = ''
  showMessage = false
  showTitle = false


toggleMessage() {
  this.showMessage = !this.showMessage
}

// Exercise 2:
changeTitle() {
  this.showTitle = !this.showTitle
}
}
