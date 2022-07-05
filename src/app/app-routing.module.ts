import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';


import { MainComponent } from './Componente/main/main.component';
import { ContactoComponent } from './Paginas/contacto/contacto.component';
import { FormularioComponent } from './Paginas/formulario/formulario.component';
import { NosotrosComponent } from './Paginas/nosotros/nosotros.component';
import { ProductosComponent } from './Paginas/productos/productos.component';


const routes: Routes = [
    { path: 'home', component: MainComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'formulario', component: FormularioComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'} 
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }

