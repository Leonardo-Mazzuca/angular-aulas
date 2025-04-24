import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss'
})
export class ControlFlowComponent {
  itemSelecionado:string = 'um'

  trocarValor(event:Event) : void {
    const elSelecionado = event.target as HTMLSelectElement
    this.itemSelecionado = elSelecionado.value
  }

  constructor () {

  }
}
