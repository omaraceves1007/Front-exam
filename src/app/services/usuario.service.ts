import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = `${URL_SERVICIOS}/usuario`;

  constructor( public http: HttpClient ) { }

  obtenerTodos() {
    return this.http.get(this.url);
  }

  obtenerUsuarios( equipo: string ) {

    const URL = `${this.url}/${equipo}`;

    return this.http.get(URL);
  }

  guardarUsuario(usuario: Usuario) {
    return this.http.post(this.url, usuario)
        .pipe( map( (resp: any) => {
          return resp.usuario;
        } ));
  }
}
