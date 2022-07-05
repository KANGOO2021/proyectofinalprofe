import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/Servicio/info-pagina.service';
@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  constructor(public infoservicio: InfoPaginaService) { }

  ngOnInit(): void {
  }

}
