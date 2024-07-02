import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from '../../services/auth.service';
//
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';
//importamos componente de rutas de angular
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio-de-sesion',
  templateUrl: './inicio-de-sesion.component.html',
  styleUrls: ['./inicio-de-sesion.component.css']
})
export class InicioDeSesionComponent {
  hide = true;

  constructor(
    public servicioAuth: AuthService,
    public servicioFirestore: FirestoreService,
    public servicioRutas: Router


  ) {
  }

  //definimos la interfaz para usuario 
  usuarios: Usuario = {
    uid: '',  //inicializamos con comillas porque es de tipo string
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: ''
  }


  async iniciarSesion() {
    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password
    }

    const res = await this.servicioAuth.IniciarSesion(credenciales.email, credenciales.password)
      .then(res => {
        alert('se pudo loguear');

        this.servicioRutas.navigate(['/inicio']);
      })
      .catch(err => {
        alert('hubo un problema la iniciar sesion' + err);

        this.limpiarInputs();

      })

  }

  limpiarInputs(){
    const inputs ={
      email: this.usuarios.email='',
      password: this.usuarios.password=''
    }
  }





}


