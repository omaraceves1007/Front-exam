import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';
import { Cliente } from '../models/cliente.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url = `${URL_SERVICIOS}/cliente`;

  constructor( public http: HttpClient ) { }

  // obtenerClientes( equipo: string, usuario: string ) {
  //   const URL = `${this.url}/${equipo}/${usuario}`;
  //   return this.http.get(URL);
  // }

  obtenerClientes( usuario: string, equipo: string ) {
    const URL = `${this.url}/${usuario}/${equipo}`;
    return this.http.get(URL).pipe( map ( (resp: any) => {
      return resp.clientes;
    } ));
  }

  guardarCliente( cliente: Cliente) {
    return this.http.post(this.url, cliente)
        .pipe( map( (resp: any) => {
            return resp.cliente;
        } ) );
  }
}
