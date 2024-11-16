import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Productos } from 'src/app/models/productos';
import { CrudService } from 'src/app/modules/admin/services/crud.service';
import { CarritoService } from 'src/app/modules/carrito/services/carrito.service';
import Swal from 'sweetalert2';

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

  stock: number=0;


  constructor(
    public servicioCrud:CrudService,
    public servicioCarrito: CarritoService //Aca el servicio carrito llama a carritoservice
  ){}

  ngOnInit():void{
    this.servicioCrud.obtenerProductos().subscribe(producto=>{
      this.coleccionProductos = producto;
    })

    this.servicioCarrito.iniciarCarrito();
  }

//funcion para mostrar mas informacion de los productos
  mostrarVer(info:Productos){

    //cambio estado del modal a true (ahora es visible)
    this.modalVisible=true;
  
    //guardo en variable seleccionado la informacion del producto elegido
    this.productoSeleccionado =info; 
  }

  agregarProducto(info:Productos){
    const stockDeseado = Math.trunc(this.stock);

    if(stockDeseado<=0 || stockDeseado>info.stock){
      Swal.fire({
        title: "El stock ingresado no es válido",
        text: "Ingrese un valor valido",
        icon: "error"
      });
    }else{
      this.servicioCarrito.crearPedido(info,stockDeseado);

    }
  }
}
