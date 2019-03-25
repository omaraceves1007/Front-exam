import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  url = `${URL_SERVICIOS}`;

  constructor( public http: HttpClient
    ) { }

  obtenerEquipos() {

    const URL = `${this.url}/equipo`;

    return this.http.get(URL);
  }

  guardarEquipo(equipo: string) {
    const URL = `${this.url}/equipo`;
    return this.http.post(URL, {nombre: equipo})
        .pipe( map( (resp: any)  => {
            return resp.equipo;
        } ));
  }
}
