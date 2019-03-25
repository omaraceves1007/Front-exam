import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EquipoService } from '../../services/equipo.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styles: []
})
export class EquipoComponent implements OnInit {

  forma: FormGroup;

  constructor( public _es: EquipoService ) {
    this.forma = new FormGroup({
      'nombre': new FormControl()
    });
   }

  ngOnInit() {
  }

  guardar() {
    this._es.guardarEquipo(this.forma.value.nombre)
        .subscribe( (resp: any) => {
          swal('Equipo Creado', resp.nombre, 'success');
        } );
  }
}
