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
  clienteSelecionado! : Cliente;
  mensagemSucesso!: string;
  mensagemErro!: string;

  constructor(
    private clienteService : ClientesService,
    private router: Router ) {}

  ngOnInit(): void {
    this.clienteService
    .getClientes()
    .subscribe( resposta => this.clientes = resposta );
  }

  novoCadastro(){
    this.router.navigate(['/clientes/clientes'])
  }

  preparaDelecao(cliente : Cliente){
    this.clienteSelecionado = cliente;
  }

  deletarCliente(){
    this.clienteService
      .deletar(this.clienteSelecionado)
      .subscribe(
        response => {
            this.mensagemSucesso = 'Cliente deletado com sucesso!',
            this.ngOnInit();
        },
        erro => this.mensagemErro = "Ocorreu um erro ao deletar o cliente."
      )
  }

}
