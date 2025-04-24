import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { PropBindingComponent } from './components/prop-binding/prop-binding.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { Carro } from './interfaces';
import { ClientesComponent } from './components/clientes/clientes.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    InterpolationComponent,
    ControlFlowComponent,
    PropBindingComponent,
    DirectiveComponent,
    ClientesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app';

  carros:Carro[] = [
    {id: 1, ano: 2017, marca: 'Honda', nome: 'Civic', cor: 'verde lima'},
    {id: 2, ano: 2000, marca: 'GM', nome: 'Tracker', cor: 'amarelo'},
    {id: 3, ano: 2005, marca: 'Katiau', nome: 'Mcqueen', cor: 'verde água'},
  ]
}
