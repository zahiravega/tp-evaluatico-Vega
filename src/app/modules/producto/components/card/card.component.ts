import { Component } from '@angular/core';
import { Productos } from 'src/app/models/productos';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
//deifinimos coleccion de productos locales
  coleccionProductos:Productos[]= [];

  //variable local para seleccionar un producto específico
  productoSeleccionado!:Productos;

  //cariable local para manejar el estado de un modal
  modalVisible:boolean = false;

  constructor(public servicioCrud:CrudService){}

  ngOnInit():void{
    this.servicioCrud.obtenerProductos().subscribe(producto=>{
      this.coleccionProductos = producto;
    })
  }

//funcion para mostrar mas informacion de los productos
  mostrarVer(info:Productos){

    //cambio estado del modal a true (ahora es visible)
    this.modalVisible=true;
  
    //guardo en variable seleccionado la informacion del producto elegido
    this.productoSeleccionado =info; 
  }

}
