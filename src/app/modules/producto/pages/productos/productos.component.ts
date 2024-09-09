import { Component } from '@angular/core';
import { Productos } from 'src/app/models/productos';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-producto',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductoComponent {

  //string wur modifica el valor de @input en el compnente hijo
product:string='';

//coleccion de productos añadidos a la lista
productosCarrusel: Productos[] =[];

productoAnadido(producto:Productos){
  //reemplazar el valor de product
  this.product=`${producto.nombre}:$${producto.precio}`;

  try{
    
    //agregamos la infomacion recibida por el parametro de la funcion a la coleccion del carrusel
    this.productosCarrusel.push(producto);
  
    Swal.fire({
      title:'¡Felicitaciones!',
      text:'Se ha añadido el producto con éxito',
      icon:'info'
    })}
  
  catch(error){
    Swal.fire({
      title:'¡ups!',
      text:'Ha ocurrido un error',
      icon:'error'
    })

  }

  
}
}
