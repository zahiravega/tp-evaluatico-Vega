import { Component, Input, Output, EventEmitter} from '@angular/core';
import { CarritoService } from 'src/app/modules/carrito/services/carrito.service';
import { Productos } from 'src/app/models/productos';
import { CrudService } from 'src/app/modules/admin/services/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-conjuntos',
  templateUrl: './card-conjuntos.component.html',
  styleUrls: ['./card-conjuntos.component.css']
})
export class CardConjuntosComponent {
  //coleccion de todos los productos de forma local
coleccionProductos: Productos[]=[];

//coleccion de productos de una sola categoria
coleccionConjuntos: Productos[]=[];

//variable para seleccionar productos especificos
productoSeleccionado!: Productos;
//variable para manejar estado del modal
modalVisible: boolean =false;

//directivas para comunicarse con el componente padre
@Input()productoReciente :string = '';

//@output sera definido como un nuevo evento
@Output()productoAgregado = new EventEmitter<Productos>()

stock: number=0;

// patentamos de froma local el servicio para acceder en eñ 
constructor(public servicioCrud: CrudService,
  public servicioCarrito: CarritoService //Aca el servicio carrito llama a carritoservice
){
}


//inicializa al momento que renderiza el componente
ngOnInit():void{

  //accedemos a metodo 'obtenerproductos'  y nos suscribimos a los cambios 
  //recibimos notificacion ante modificaciones
  this.servicioCrud.obtenerProductos().subscribe(producto=>{
    this.coleccionProductos= producto;

    //mostrara la coleccion de esa categoria 
    this.mostrarProductoConjuntos();
  })
}


//funcion para filtrar los productios del tipo "categoria"
mostrarProductoConjuntos(){
  //iteramos coleccion de productos con un  'forEach'
  this.coleccionProductos.forEach(producto=>{
    //si es de tipo"accesorios" -> condicional
    if(producto.categoria=== "conjuntos"){
      //lo sube/guarda enla coleccion de productos de tipo "accesorios"
      this.coleccionConjuntos.push(producto);
    }
  })
}

mostrarVer(info:Productos){
  this.modalVisible=true;

  this.productoSeleccionado=info;
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
