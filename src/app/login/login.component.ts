import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  username!: string;
  password!: string;
  cadastrando!: boolean;
  mensagemSucesso!: string; 
  errors!: String[];

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  onSubmit(){
    this.router.navigate(['home'])
  }

  preparaCadastrar(event: any){
    event.preventDefault();
    this.cadastrando = true;
  }

  cancelaCadastro(){
    this.cadastrando = false;
  }

  cadastrar(){
    const usuario: Usuario = new Usuario;
    usuario.password = this.password;
    usuario.username = this.username;
    this.authService
      .salvar(usuario)
      .subscribe( response => {
        this.mensagemSucesso = "Cadastro realizado com sucesso! Efetue o login."
        this.errors = []
        this.cadastrando = false;
        this.username = "";
        this.password = "";
      }, erroResponse => {
        this.mensagemSucesso = "";
        this.errors = erroResponse.error.errors;
      })
      ;
  }

}
