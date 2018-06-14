import { Component, OnInit, group } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//service
import { UsuarioService } from '../services/service.index';

//Modelo
import { Usuario } from '../models/usuario.model';

import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;

// import * as swal from 'sweetalert';

declare function init_plugin();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  forma : FormGroup;

  constructor( public _us:UsuarioService,
               public router:Router ) { }

  sonIguales( campo1: string, campo2: string ) {
    return ( group: FormGroup) => {
      let pass1 = group.controls[campo1].value;
      let pass2 = group.controls[campo2].value;

      if ( pass1 === pass2 ) {
        return null;
      }

      return {
        sonIguales : true
      };
    };
  }

  ngOnInit() {
    init_plugin();
    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      correo : new FormControl(null, [Validators.required, Validators.email]),
      password : new FormControl(null, Validators.required),
      password2 : new FormControl(null, Validators.required),
      condiciones : new FormControl( false )
    }, { validators: this.sonIguales( 'password', 'password2' ) } );

    this.forma.setValue({
      nombre: 'Test',
      correo: 'test@text.com',
      password: '123456',
      password2: '123456',
      condiciones: true
    });
  }

  registrarUsuario(){

    if (this.forma.invalid) {
      return;
    }

    if (!this.forma.value.condiciones) {
      console.log("Debe aceptar las condiciones");
      swal('Importante', 'Debe de aceptar las condicione', 'warning');
      return;
    }
    
    let usuario = new Usuario(
      this.forma.value.nombre,
      this.forma.value.correo,
      this.forma.value.password
    );

    this._us.crearUsuario( usuario )
        .subscribe( resp => { this.router.navigate(['/login']) });
  }

}
