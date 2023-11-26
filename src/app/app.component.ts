import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    WarningAlertComponent, 
    SuccessAlertComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basics-assignment-new';
  alerts = [
    'this is the message 1',
    'this is the message 2',
    'this is the message 3',
    'this is the message 4',
    'this is the message 5',
    'this is the message 6',
    'this is the message 7',
    'this is the message 8'
  ]
}
