import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class LoginGuardGuard implements CanActivate {

  constructor( 
      public _us:UsuarioService,
      public router:Router){}

  canActivate(){
    if (this._us.estaLogueado()) {
      console.log("Paso el Guard");
      return true;
    }else {
      console.log("Bloqueado por el Guard");
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
