import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import swal from 'sweetalert';
import { UsuarioService } from '../../services/usuario.service';
import { ClienteService } from '../../services/cliente.service';
import { Usuario } from '../../models/usuario.model';
import { Cliente } from '../../models/cliente.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styles: []
})
export class ClienteComponent implements OnInit {

  forma: FormGroup;
  usuarios: Usuario[] = [];
  cliente: Cliente = new Cliente('', '');

  constructor( public _us: UsuarioService,
                public _cs: ClienteService ) {
    this.forma = new FormGroup({
      'usuario_id': new FormControl(''),
      'email': new FormControl()
    });

    this._us.obtenerTodos().subscribe((resp: any) => {
      this.usuarios = resp.usuarios;
    });

  }

  ngOnInit() {
  }

  guardar() {
    this.cliente.usuario_id = this.forma.value.usuario_id;
    this.cliente.email = this.forma.value.email;
    this._cs.guardarCliente(this.cliente)
        .subscribe((resp: any) => {
          swal('Cliente Creado', resp.email, 'success');
        });
  }
}
