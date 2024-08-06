import { Injectable } from '@angular/core';

//servicio en la nube de autentificacion de firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    public auth: AngularFireAuth,
    private servicioFirestore: AngularFirestore

  
  ) { }

  //funcion para registro
  registrar(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);

  }
  //funcion para inicio de sesion 
  IniciarSesion(email: string, password: string) {

    return this.auth.signInWithEmailAndPassword(email, password);
  }

  //funcion para cerrar sesion
  cerrarSesion(){
    return this.auth.signOut();
  }


  //funcion para tomar el UID 
  async obtenerUid(){
    const user = await this.auth.currentUser;


    /*si el usuario no respeta la estructura de la interfaz/
    si tuvo problemas con el registro*/
    
    if(user== null){
      return null;
    }else{
      return user.uid;
    }

  }

  obtenerUsuario(email:string){
    return this.servicioFirestore.collection("usuarios", ref=> ref.where('email','==',email)).get().toPromise();
  }


}

