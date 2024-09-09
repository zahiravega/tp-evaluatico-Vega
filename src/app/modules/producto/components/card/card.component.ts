import { Component, Input, Output, EventEmitter} from '@angular/core';
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

    //booleano para manegjar el compra vsible
    compraVisible: boolean= false; 

  //directivas para comunicarse con el componente padre
  @Input()productoReciente :string = '';

  //@output sera definido como un nuevo evento
  @Output()productoAgregado = new EventEmitter<Productos>()


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

 agregarProducto(info : Productos){
  this.productoAgregado.emit(info);

  this.compraVisible= true;
 }

}
