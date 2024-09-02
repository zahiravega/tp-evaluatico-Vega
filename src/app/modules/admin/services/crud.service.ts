import { Injectable } from '@angular/core';
import { Productos } from 'src/app/models/productos';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs'; 




@Injectable({
  providedIn: 'root'
})
export class CrudService {

  //DEFINIMOS COLECCION PARA LOS PRODUCTOS DE LA WEB
  private productosCollection: AngularFirestoreCollection<Productos>

  constructor(private database: AngularFirestore) {
    this.productosCollection = database.collection('producto')
  }

  //crear nuevos productos
  crearProducto(producto: Productos) {
    //promesa: es un tipo de funcion, que te va a mostrar un resultado, ya sea aceptado o rechazado
    return new Promise(async (resolve, reject) => {
      try {
        //creamos numero identificativo para el procdutno en la bse de datos
        const idProducto = this.database.createId();
        //asignamos ID creado al atributo idProducto de la interfaz Producto
        producto.idProducto = idProducto

        const resultado = await this.productosCollection.doc(idProducto).set(producto);

        resolve(resultado);
      }

      catch (error) {
        reject(error);
      }


    })
  }

  //obtener productos
  obtenerProductos() {

    /*
snapshotChanges = toma captura del estado de los datos
pipe = tuberias que retornan un nuevo arreglo
map= "mapea" p recorre esa nueva informacion 
a = resguarda la nueva informacion y la envia como un nuevo documento
    */
    return this.productosCollection.snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())))

  }



  //editar productos
modificarProducto(idProducto:string, nuevaData:Productos){
  /*accedemos a la coleccion 'productos' de la base de datos,
   buscamos el id del producto seleccionado,
  lo actializamos con el metodo 'update' neviando la nueva informacion*/

  return this.database.collection('producto').doc(idProducto).update(nuevaData);

}






  //eliminar productos
  eliminarProducto(idProducto: string) {
    return new Promise((resolve, reject) => {
      try {
        const respuesta = this.productosCollection.doc(idProducto).delete();
        resolve(respuesta);
      }
      catch (error) {
        reject(error);
      }
    })
  }

}