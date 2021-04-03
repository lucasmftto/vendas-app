import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'jquery';
import { ClientesService } from '../clientes.service';

import { Cliente } from './cliente'

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  cliente!: Cliente;
  success: boolean = false;
  errors!: String[];

  constructor(
    private clienteService: ClientesService ,
    private router: Router
    ) {
    this.cliente = new Cliente();
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.clienteService
      .salvar(this.cliente)
      .subscribe( response => {
        this.success = true;
        this.errors = [];
        this.cliente = response;
    } , errorResponse => {
      this.success = false;
      this.errors = errorResponse.error.errors;
    }
    )
  }

  voltarParaListagem(){
    this.router.navigate(['/clientes-lista'])
  }

}
