import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  parameterValue!: number;

  constructor(
    private clienteService: ClientesService ,
    private router: Router,
    private activatedRoute : ActivatedRoute
    ) {
    this.cliente = new Cliente();
   }

  ngOnInit(): void {
   
    this.activatedRoute.params.subscribe(parameter => {
      let id = +parameter['id'];
      this.parameterValue = id
    })

    if(this.parameterValue){
      this.clienteService
        .getClienteById(this.parameterValue)
        .subscribe( 
          response => this.cliente = response ,
          errorResponse => this.cliente = new Cliente()
          )
    }
  } 

  onSubmit(){
    if(this.parameterValue){
      this.clienteService
        .atualizar(this.cliente)
        .subscribe(response => {
          this.success = true;
          this.errors = [];
        }, errorResponse => {
          this.errors = ['Erro ao tentar atualizar o cliente.'];
        }
      )
    }else{
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

  }

  voltarParaListagem(){
    this.router.navigate(['/clientes/lista'])
  }

}
