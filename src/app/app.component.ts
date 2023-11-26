import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { UsernameComponent } from './username/username.component';
import { ToggleTimestampComponent } from './toggle-timestamp/toggle-timestamp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    WarningAlertComponent, 
    SuccessAlertComponent,
    UsernameComponent,
    ToggleTimestampComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basics-assignment-new';
  alerts = [
    'this is the message 1',
    'this is the message 2',
    'this is the message 3'
  ]
}
