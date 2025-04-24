import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  clientes: Cliente[] = [
    { id: '121234343', nome: 'Macoco', telefone: '11941502216' },
    { id: '433434334', nome: 'Aninha' },
  ];

  constructor() {}

  list ():Cliente[] {
    return this.clientes;
  }

  remove (id: string) {

    const cliente = this.clientes.find(c => c.id === id);

    if(cliente) {
      const index = this.clientes.findIndex(c => c.id === cliente.id);
      this.clientes.splice(index,1);
    }

  }

  add(cliente:Cliente) {
    this.clientes.push(cliente);
  }

  update (cliente:Cliente) {

    const index = this.clientes.findIndex(c => c.id === cliente.id);

    if(index!==-1){
      this.clientes[index] = {
        ...this.clientes[index],
        ...cliente
      }
    }

  }

}
