import { Injectable } from '@angular/core';

//cloud firestore
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {


  /*definimos de forma prinvada la coleccion de usuarios para que no sea accesible en toda la aplicacion.
  lo definimos como una coleccion de Firestore que respete la estructura de nuestra interfaz 'usuario'
  */
  private usuariosCollection: AngularFirestoreCollection<Usuario>

  constructor(private database: AngularFirestore) {
    /*
    usuariosCollection va a definir la nueva coleccion 'usuarios' que estará en nuestra base de datos
      */

    this.usuariosCollection = this.database.collection<Usuario>('usuarios');
  }

  agregarUsuario(usuario: Usuario, id: string) {


    return new Promise(async (resolve, reject) => {
     
      try {
        usuario.uid = id;
      

        const resultado = await this.usuariosCollection.doc(id).set(usuario)

        resolve(resultado);
        
      } catch (error) {
        //captura una falla y devuelve un 'error'
        reject(error);
      }
    })
  }
}