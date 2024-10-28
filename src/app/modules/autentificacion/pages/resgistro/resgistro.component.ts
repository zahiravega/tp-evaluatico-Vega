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

//importacion de sweetalert
import Swal from 'sweetalert2';

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
    rol: 'visitante', //-> todos los usuarios al registrarse seran visitantes
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
        Swal.fire({
          title: "¡Bien hecho!",
          text: "Se registró correctamente",
          icon: "success"
        });


        this.servicioRutas.navigate(['/inicio']);
      })

      .catch(error => {

        Swal.fire({
          title: "¿Hubo un problema al registrar al usuario!",
          text: error ,
          icon: "error"
        });
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
      rol: this.usuarios.rol = 'visitante',
      password: this.usuarios.password=''
   }
  }



}

