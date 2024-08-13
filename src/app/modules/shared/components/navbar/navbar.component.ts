import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/autentificacion/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  logueado =true; //booleana para manejo de registro y el inicio de sesion
  deslogueado=false; //booleana para el manejo de cierre de sesion

  constructor(
    public servicioAuth: AuthService,
    public servicioRutas: Router,
  ){  }
    //funcion ingresar va a invertir los valores
    ingresar(){
      this.logueado= false;
      this.deslogueado=true;
    }

    //funcion 'cerrar sesion' devuelve los valores originales
    cerrarSesion(){
      this.deslogueado=false;
      this.logueado=true;

      //llamamos al metodo 'cerrarSesion' para limpiar el token
      this.servicioAuth.cerrarSesion();

      //redirigimos a la raiz del sitio web
      this.servicioRutas.navigate(['/']);
    }


}
