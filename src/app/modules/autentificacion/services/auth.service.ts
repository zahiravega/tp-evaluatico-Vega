import { Injectable } from '@angular/core';

//servicio en la nube de autentificacion de firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { AngularFirestore } from '@angular/fire/compat/firestore';
//observable para obtener cambios
import { Observable } from 'rxjs';

//itera coleccion leyendo informacion actual
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   //propiedad privada para guardar el rol del usuario
   private rolUsuario: string|null=null;

  constructor(
    private auth: AngularFireAuth,
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
    si tuvo problemas con el registroo*/
    
    
    if(user== null){
      return null;
    }else{
      return user.uid;
    }

  }

  obtenerUsuario(email:string){
    return this.servicioFirestore.collection("usuarios", ref=> ref.where('email','==',email)).get().toPromise();
  }

  //funcion para obtener el rol del usuario
obtenerRol( uid:string):Observable<string | null > { 
  //accedemos a coleccion usuarios, buscando por UID, obteniendo cambios en valores.
  //al enviar info por tuberia, "mapeamos" la coleccion, obtenemos un usuario especifico y buscamos us atributo "rol", aun si este es "nulo"
  return this.servicioFirestore.collection("usuarios").doc(uid).valueChanges().pipe(map((usuario: any)=> usuario ? usuario.rol:null));
}

//enviar el rol obtenido -> asignarlo al rol de la variable local
setUsuarioRol(rol:string){
  this.rolUsuario= rol;
  }
  
  // obtener el roll nuevamente
  getUsuarioRol():string|null {
  return this.rolUsuario;
  }


}

