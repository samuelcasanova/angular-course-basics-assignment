import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-username',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './username.component.html',
  styleUrl: './username.component.css'
})
export class UsernameComponent {
  username: string = 'John Doe'

  reset() {
    this.username = ''
  }
}
