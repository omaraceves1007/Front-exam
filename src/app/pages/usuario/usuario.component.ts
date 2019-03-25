import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import swal from 'sweetalert';
import { EquipoService } from '../../services/equipo.service';
import { Equipo } from '../../models/equipo.model';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  forma: FormGroup;
  equipos: Equipo[] = [];
  usuario: Usuario = new Usuario('', '');

  constructor( public _us: UsuarioService,
                public _es: EquipoService ) {
    this.forma = new FormGroup({
      'nombre': new FormControl(),
      'equipo_id': new FormControl('')
    });

    this._es.obtenerEquipos().subscribe((resp: any) => {
      this.equipos = resp.equipos;
    });

   }

  ngOnInit() {
  }

  guardar() {
    this.usuario.equipo_id = this.forma.value.equipo_id;
    this.usuario.nombre = this.forma.value.nombre;
    this._us.guardarUsuario(this.usuario)
        .subscribe((resp: any) => {
          swal('Usuario Creado', resp.nombre, 'success');
        });
  }
}
