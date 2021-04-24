import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicoPrestado } from './servico-prestado/servicoPrestado';
import { environment } from '../environments/environment'
import { ServicoPrestadoBusca } from './servico-prestado/servico-prestado-list/servicoPrestadoBusca';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  apiURL: string = environment.apiURL + '/api/servicos-prestados/';

  constructor(private http: HttpClient) { }

  salvar(servicoPrestado: ServicoPrestado) : Observable<ServicoPrestado>{
    return this.http.post<ServicoPrestado>(this.apiURL, servicoPrestado);
  }

  buscar(nome: string, mes: number) : Observable<ServicoPrestadoBusca[]>{
    const httParams = new HttpParams()
      .set("nome", nome)
      .set("mes", mes ? mes.toString(): '' );
   
    const url = this.apiURL + "?" + httParams.toString()
    console.log(url);
    return this.http.get<any>(url);
  }
}
