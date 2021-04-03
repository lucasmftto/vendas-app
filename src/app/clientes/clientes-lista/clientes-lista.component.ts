import { Component, OnInit } from '@angular/core';
 import { Router } from '@angular/router';

import { ClientesService } from '../../clientes.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(
    private clienteService : ClientesService,
    private router: Router ) {}

  ngOnInit(): void {
    this.clienteService
    .getClientes()
    .subscribe( resposta => this.clientes = resposta );
  }

  novoCadastro(){
    this.router.navigate(['/clientes'])
  }

}
