import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.scss'
})
export class InterpolationComponent {
  name = "Macoco";
  age = 19
  job = "Developer";
  hobbies = ["Music", "Gym", "Code"];
  car = {make: "Honda", model: "Civic"}
  imageUrl = "../../../assets/nao-grita.png"
}
