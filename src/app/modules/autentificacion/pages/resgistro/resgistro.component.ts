import { Component } from '@angular/core';

//interfaz usuario
import { Usuario } from 'src/app/models/usuario';

//servicio de autentificacion
import { AuthService } from '../../services/auth.service';

//componente de rutas de angular
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';

//CRYPTO JS
import * as CryptoJS from 'crypto-js'

@Component({
  selector: 'app-resgistro',
  templateUrl: './resgistro.component.html',
  styleUrls: ['./resgistro.component.css']
})
export class ResgistroComponent {


  //input de la contrasela para ver los caracteres o no
  hide = true;


  // ############ IMPORTACIONES DE INTERFAZ "USUARIO"

  usuarios: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: ''

  }

  //coleccion de usuarios
  coleccionUsuarios: Usuario[] = [];


  //FIN IMPORTACIONES 

  constructor(
    public servicioAuth: AuthService,
    public servicioFirestore: FirestoreService,
    public servicioRutas: Router,
  ) { }


  //funcion para el registro de nuevos usuarios
  async registrar() {

    //REGISTRO CON SERVICIO DE AUTH
    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password
    }


    const res = await this.servicioAuth.registrar(credenciales.email, credenciales.password)

      .then(res => {
        alert("¡se pudo registrar con exito!");


        this.servicioRutas.navigate(['/inicio']);
      })

      .catch(error => {
        alert("¡hubo un problema al registrar un nuevo usuario \n" + error);
      })

    const uid = await this.servicioAuth.obtenerUid();
    this.usuarios.uid = uid;

    //encriptacion de contraseña 
    this. usuarios.password= CryptoJS.SHA256(this.usuarios.password).toString()



    this.guardarUsuario();

    this.limpiarInputs();

  }


  //agregar nuevo usuario

  async guardarUsuario() {

    this.servicioFirestore.agregarUsuario(this.usuarios, this.usuarios.uid)
      .then(res => {
        console.log(this.usuarios);
      })
      .catch(err => {
        console.log('error', err)
      })

  }


  //limpiar inputs

  limpiarInputs(){
    const inputs={
      uid: this.usuarios.uid='',
      nombre: this.usuarios.nombre='',
      apellido: this.usuarios.apellido='',
      email: this.usuarios.email='',
      rol: this.usuarios.email= '',
      password: this.usuarios.password='',
   }
  }



}

