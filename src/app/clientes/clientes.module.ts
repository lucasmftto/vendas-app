import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import {ClientesRoutingModule} from './clientes-routing.module';
import {ClientesComponent} from './clientes.component';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component'

@NgModule({
  declarations: [
    ClientesComponent,
    ClientesListaComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule
  ],
  exports: [
    ClientesComponent,
    ClientesListaComponent
  ]
})
export class ClientesModule { }
