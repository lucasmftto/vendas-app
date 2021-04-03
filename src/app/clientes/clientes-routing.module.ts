import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { ClientesComponent}  from './clientes.component';

const routes: Routes = [
    { path: 'clientes', component: ClientesComponent },
    { path: 'clientes-lista', component: ClientesListaComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class ClientesRoutingModule{}