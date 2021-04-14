import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { ClientesComponent}  from './clientes.component';

const routes: Routes = [
    { path : 'clientes' , component: LayoutComponent, children:[
        { path : 'clientes', component: ClientesComponent },
        { path : 'clientes/:id', component: ClientesComponent },
        { path : 'lista', component: ClientesListaComponent },
        { path : '', redirectTo: '/clientes/lista', pathMatch: 'full' }
    ]}
];


    

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class ClientesRoutingModule{}