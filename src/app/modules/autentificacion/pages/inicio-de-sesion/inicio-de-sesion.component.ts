import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from '../../services/auth.service';
//
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';
//importamos componente de rutas de angular
import { Router } from '@angular/router';

//importacion de crypto-js
import * as CryptoJS from 'crypto-js';

//importacion de sweetalert
import Swal from 'sweetalert2';


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
     password: ''
  }

  //coleccion 'iniciarsesion' para iniciar sesion 
  coleccioniniciarsesion: Usuario[] = [];

  //constante que recibe la informacion ingresada
  async iniciarSesion() {
    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password
    }


    try {
      //se obtiene el usuario en la bd
      const usuarioBD = await this.servicioAuth.obtenerUsuario(credenciales.email);

      if (!usuarioBD || usuarioBD.empty) {

        Swal.fire({
          title: "¡Oh no!",
          text: "El correo electrónico no está registrado",
          icon: "warning"
        });

        this.limpiarInputs();
        return;

      }

  
      const usuarioDoc = usuarioBD.docs[0];

      const usuarioData = usuarioDoc.data() as Usuario;

      //encripta la contraseña que el usuario envia mediante #iniciarSesion
      const hashedPassword = CryptoJS.SHA256(credenciales.password).toString();


      if (hashedPassword !== usuarioData.password) {
        Swal.fire({
          title: "¡Hubo un error!",
          text: "La contraseña ingresada es incorrecta",
          icon: "error"
        });
     
        this.usuarios.password = '';
        return;

      }


      const res = await this.servicioAuth.IniciarSesion(credenciales.email, credenciales.password)
      .then(res => {
        Swal.fire({
          title: "¡Bien hecho!",
          text: "Se inició sesión con exito",
          icon: "success"
        });

        //almacenamos y enviamos por parametro el rol de los datos de usuario obtenidos 
        this.servicioAuth.setUsuarioRol(usuarioData.rol);
        if(usuarioData.rol==="admin"){
          console.log("Inicio de administrador");
// si es administrador, redirecciona a la vista de "admin"
          this.servicioRutas.navigate(['/admin']);
        }else{
          console.log("Inicio de visitante");
// si es de otro tipo de usuario, redirecciona al "inicio"
          this.servicioRutas.navigate(['/inicio']);
        }

        
        this.servicioRutas.navigate(['/inicio']);
      })
      .catch(err => {
        Swal.fire({
          title: "Ups",
          text: "Hubo un problema al iniciar sesion" + err,
          icon: "warning"
        });
        alert('hubo un problema la iniciar sesion' + err);
        this.limpiarInputs()
      })
    }
    catch(error){
      this.limpiarInputs()
     }
    }


  limpiarInputs() {
    const inputs = {
      email: this.usuarios.email = '',
      password: this.usuarios.password = ''
    }
  }





}


