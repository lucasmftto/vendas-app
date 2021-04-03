import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursoAngularComponent } from './curso-angular/curso-angular.component';

import { ClientesModule} from './clientes/clientes.module'
import { TemplateModule} from './template/template.module';
import { HomeComponent } from './home/home.component'
import { ClientesService } from './clientes.service';

@NgModule({
  declarations: [
    AppComponent,
    CursoAngularComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ClientesModule,
    TemplateModule
  ],
  providers: [
    ClientesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
