import { Component } from '@angular/core';
import { Cliente } from '../../interfaces';
import { ClienteService } from '../../services/cliente.service';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.scss'
})
export class ClientesComponent {
  clienteForm:FormGroup = new FormGroup([])
  clientes: Cliente[] = []

  constructor(
    private clienteService:ClienteService,
    private formBuilder:FormBuilder
  ) {
    this.clienteForm = formBuilder.group({
      nome: ['',Validators.required],
      telefone: ['']
    })
  }

  list():void {
    this.clientes = this.clienteService.list();
  }

  ngOnInit () {
    this.list()
  }

  save (e:Event) {
    e.preventDefault();
  }
}
