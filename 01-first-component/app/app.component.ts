import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <input 
        type="text"
        (input)="handleChange($event.target.value)"
      >
    </div>
    
    <div *ngIf="name.length >= 2">
      Searching for ... {{ name }}
    </div>
  `
})
export class AppComponent {
  name: string;
  
  constructor() {
    this.name = '';
  }
  handleChange(value: any) {
    this.name = value;
  }
}