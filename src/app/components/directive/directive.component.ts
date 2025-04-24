import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.scss'
})
export class DirectiveComponent {
  isActive = true;
  hasError = false;
  classes = [ "text-success", "text-danger", "special", "error"]
  isSpecial = false;
  size = '50px';
  font = "Arial";
  color = "aqua";

  currentItem = {
    name : ''
  }

  setUpperCase(value:string) {
    this.currentItem.name = value.toUpperCase();
    
  }
}
