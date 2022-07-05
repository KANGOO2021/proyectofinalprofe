import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../Interfaces/info-pagina.interface';


@Injectable({
  providedIn: 'root'
})

export class InfoPaginaService {

  info: InfoPagina = {};
  carga: boolean = false;
  public equipo: any[] = [];


  constructor( private http: HttpClient ) {
    //imprime los datos en la consola 
    //console.log('Servicio listo para llamadas o lecturas de archivos o datos');
    this.cargarInfo();
    this.cargarDatosFirebase();
  }

  private cargarInfo(){
    this.http.get('assets/data/data-pagina.json').subscribe( (res: any) => {
      console.log(res);
      console.log(res.email);
      console.log(res['email']);

      this.info = res;

      console.log(this.info);

      console.log(this.info.email);
      
    }); 
  }
// se agrega la url de la base de datos de firebase(proyecto:angularApp) y se agrega nombre de colección(equipo) más .json
  private cargarDatosFirebase(){
    this.http.get('https://angularapp-e1539-default-rtdb.firebaseio.com/equipo.json').subscribe( (res: any) => {
      console.log(res);
      this.equipo = res;

      console.log(this.equipo);
      
    }); 
  }



}
