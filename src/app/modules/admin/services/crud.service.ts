import { Injectable } from '@angular/core';
import { Productos } from 'src/app/models/productos';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs'; 
// Importaciones para manejo de archivos y referencias
import { getDownloadURL, getStorage, ref, UploadResult, uploadString, deleteObject } from 'firebase/storage';




@Injectable({
  providedIn: 'root'
})
export class CrudService {

  //DEFINIMOS COLECCION PARA LOS PRODUCTOS DE LA WEB
  private productosCollection: AngularFirestoreCollection<Productos>

     // Definir variable "respuesta" que podrá subir resultados
     private respuesta!: UploadResult;

     // Inicializar servicio de Storage
     private storage = getStorage();

  constructor(private database: AngularFirestore) {
    this.productosCollection = database.collection('producto')
  }

 
 // CREAR productos -> obtiene datos del formulario y url de la imagen
 crearProducto(producto: Productos, url: string){
    //promesa: es un tipo de funcion, que te va a mostrar un resultado, ya sea aceptado o rechazado
    return new Promise(async (resolve, reject) => {
      try {
        //creamos numero identificativo para el procdutno en la bse de datos
        const idProducto = this.database.createId();
        //asignamos ID creado al atributo idProducto de la interfaz Producto
        producto.idProducto = idProducto

         // Asignamos URL recibida del parámetro al atributo "imagen" de interfaz Producto
         producto.imagen = url;

        const resultado = await this.productosCollection.doc(idProducto).set(producto);
        //.doc = ingresa al documento idProducto
        //.set = guarda o actualiza un documento en Firestore con los datos que se pasan como argumento.

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
action.payload.doc.data()= Dentro de cada action, se obtiene el documento de la colección con payload.doc, y luego se extraen los datos del documento con .data().
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
  eliminarProducto(idProducto: string, imagenUrl: string) {
    return new Promise((resolve, reject) => {
      try {
         // Definimos referencias localmente de Storage
         const storage = getStorage();
         // Obtiene la referencia desde el almacenamiento de Storage
         const referenciaImagen = ref(storage, imagenUrl);
       // Eliminamos la imagen desde el almacenamiento
       deleteObject(referenciaImagen)
       .then((res) => {
         const respuesta = this.productosCollection.doc(idProducto).delete();

         resolve (respuesta);
      })
    
      .catch(error => {
        reject("Error al eliminar la imagen: \n"+error);
      })
    }
    catch(error){
      reject (error);
    }
  })
  }


   // OBTENER url de imágenes
 obtenerUrlImagen(respuesta: UploadResult){
  // Retorna URL obtenida como REFERENCIA
  return getDownloadURL(respuesta.ref);
}

/**
 * PARÁMETROS DEFINIDOS
 * @param {string} nombre <- nombre de la imagen
 * @param {any} imagen <- tipo de imágenes que se pueden subir (extension)
 * @param {string} ruta <- ruta de almacenamiento de las imágenes
 * @returns <- se retorna lo obtenido
 */

// SUBIR imágenes con sus referencias
async subirImagen(nombre: string, imagen: any, ruta: string){
  try{
    // Crear una referencia de imagen:
    // accede a Storage (almacenamiento), ruta (carpeta) / nombre (nombreImagen)
    let referenciaImagen = ref(this.storage, ruta + '/' + nombre);

    // Asignarle a la respuesta la información de las imágenes subidas
    this.respuesta = await uploadString(referenciaImagen, imagen, 'data_url')
    .then(resp => {
      return resp;
    })
    return this.respuesta;
  }
  
  catch(error){
    console.log(error);

    return this.respuesta;
  }
}

}