import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toggle-timestamp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle-timestamp.component.html',
  styleUrl: './toggle-timestamp.component.css'
})
export class ToggleTimestampComponent {
  visibilityCssProp = 'visible'

  toggleVisibility() {
    this.visibilityCssProp = this.visibilityCssProp === 'visible' ? 'hidden' : 'visible'
  }

  clicks: string[] = []

  addClick() {
    this.clicks.push(`Click received at ${new Date().toLocaleTimeString()}`)
  }

  onClick() {
    this.toggleVisibility()
    this.addClick()
  }
}
