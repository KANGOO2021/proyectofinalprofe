import { Component } from '@angular/core';
import { InfoPaginaService } from './Servicio/info-pagina.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoFinal';


  constructor( public InfoPaginaService: InfoPaginaService ) {}
}
