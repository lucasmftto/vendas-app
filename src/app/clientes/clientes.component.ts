import { Component, OnInit } from '@angular/core';

import { Cliente } from './cliente'

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  cliente!: Cliente;

  constructor() {
    this.cliente = new Cliente();
   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.cliente);
  }

}
