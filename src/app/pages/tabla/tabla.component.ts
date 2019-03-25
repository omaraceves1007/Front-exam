import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../../services/equipo.service';
import { Equipo } from '../../models/equipo.model';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente.model';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styles: []
})
export class TablaComponent implements OnInit {

  equipos: Equipo[] = [];
  usuarios: Usuario[] = [];
  clientes: Cliente[] = [];
  equipo_id: string;
  usuario_id: string;

  displayedColumns: string[] = ['_id', 'usuario_id', 'email'];

  constructor( public _es: EquipoService,
                public _us: UsuarioService,
                public _cs: ClienteService
                ) {
    this._es.obtenerEquipos().subscribe( (resp: any) => {
      this.equipos = resp.equipos;
    });
  }

  ngOnInit() {
  }

  obtenerUsuarios( equipo: string ) {
    this.equipo_id = equipo;
    this._us.obtenerUsuarios(equipo).subscribe( (resp: any) => {
      this.usuarios = resp.usuarios;
    });
  }

  buscaClientes(equipo_id, usuario_id) {
    this._cs.obtenerClientes( usuario_id, equipo_id ).subscribe( (resp: any) => {
      if ( resp.length === 0) {
        swal('Cidado', 'No existen datos por mostrar', 'warning');
      }
      this.clientes = resp;
    });
  }
}
