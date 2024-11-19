import { Injectable } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Pedido } from 'src/app/models/pedido';
import { AuthService } from '../../autentificacion/services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs';
import { Productos } from 'src/app/models/productos';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  //modelo que va a recibir los datos del pedido que se subira a la base de datos
  pedido: Pedido = {
    idPedido: '',

    productos: {
      idProducto: '',
      nombre: '',
      descripcion: '',
      descripcion2: '',
      precio:0,
      stock:0 ,
      imagen: '',
      alt: '',
      categoria: '',
      
    },
    cantidad: 0,
    total: 0
  }

  private pedidosColeccion : AngularFirestoreCollection<Pedido>
  private uid: string | null = null;

  constructor(
    private servicioAuth: AuthService,
    private servicioFirestore: AngularFirestore,
    public servicioRutas: Router,

  ) {
    this.pedidosColeccion = this.servicioFirestore.collection(`usuarios/${this.uid}/pedido`)
  }


//inicializa el carrito y la subcoleccion de pedidos
  iniciarCarrito(){
    this.servicioAuth.obtenerUid().then(uid => {
      this.uid = uid

      if(this.uid===null){
        console.error('no se obtuvo el UID. Intente iniciar sesion');
        this.servicioRutas.navigate(['/inicio-sesion']);

      } else {

        this.pedidosColeccion= this.servicioFirestore.collection(`usuarios/${this.uid}/pedido`)

      }

    })
  }


  //obtiene los productos que ya esten dentro del pedido
obtenerCarrito(){
return this.pedidosColeccion.snapshotChanges().pipe(map(action=>action.map(a=>a.payload.doc.data())))
}


crearPedido(producto:Productos,stock:number){
  try{
    const idPedido= this.servicioFirestore.createId();

    this.pedido.idPedido= idPedido;
    this.pedido.productos=producto;
    this.pedido.cantidad= stock;
    this.pedido.total = producto.precio*stock;


    this.pedidosColeccion.doc(idPedido).set(this.pedido);
  }
  catch(error){
    Swal.fire({
      title:'¡Oh no!',
      text:'Ha ocurrido un error al subir su producto \n'+ error,
      icon:'error'
    });
  }
}

borrarPedido(pedido:Pedido){
  try{
    this.pedidosColeccion.doc(pedido.idPedido).delete();

    Swal.fire({
      title: `¡${pedido.productos.nombre} se ha borrado con éxito!`,
      icon:'info'
    });
  }
  catch(error){
    Swal.fire({
      title:'¡Oh no!',
      text:'Ha ocurrido un error al borrar su pedido: \n'+ error,
      icon:'error'
    });

  }
}

}
