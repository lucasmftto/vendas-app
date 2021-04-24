import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { ServicoPrestadoFormComponent } from './servico-prestado-form/servico-prestado-form.component';
import { ServicoPrestadoListComponent } from './servico-prestado-list/servico-prestado-list.component';
import { AuthGuard } from '../auth.guard'


const routes: Routes = [
  { path: 'servicos-prestados', canActivate:[AuthGuard], component: LayoutComponent, children: [
          { path: 'form', component: ServicoPrestadoFormComponent },
          { path: 'listagem', component: ServicoPrestadoListComponent },
          { path: '', redirectTo:'/servicos-prestados/listagem', pathMatch: 'full' }
  ] }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoPrestadoRoutingModule { }
