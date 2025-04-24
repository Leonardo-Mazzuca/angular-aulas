
import { Component } from '@angular/core';

@Component({
  selector: 'app-prop-binding',
  standalone: true,
  imports: [],
  templateUrl: './prop-binding.component.html',
  styleUrl: './prop-binding.component.scss'
})
export class PropBindingComponent {
  imgUrl = "../../../assets/nao-grita-cr7.png";
  isDisabled = false;
}
