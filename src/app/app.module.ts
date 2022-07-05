import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './Componente/footer/footer.component';
import { MainComponent } from './Componente/main/main.component';
import { NavbarComponent } from './Componente/navbar/navbar.component';
import { NosotrosComponent } from './Paginas/nosotros/nosotros.component';
import { ProductosComponent } from './Paginas/productos/productos.component';
import { ContactoComponent } from './Paginas/contacto/contacto.component';
import { FormularioComponent } from './Paginas/formulario/formulario.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainComponent,
    NavbarComponent,
    NosotrosComponent,
    ProductosComponent,
    ContactoComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
