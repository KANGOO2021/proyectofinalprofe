import { Component } from '@angular/core';
import { InfoPaginaService } from 'src/app/Servicio/info-pagina.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})



export class FooterComponent {

  public fecha: number = new Date().getFullYear();


  constructor(public servicio: InfoPaginaService) { }
  

}
