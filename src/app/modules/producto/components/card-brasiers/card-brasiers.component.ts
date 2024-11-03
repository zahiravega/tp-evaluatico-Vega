import { Component } from '@angular/core';
import { Productos } from 'src/app/models/productos';
import { CrudService } from 'src/app/modules/admin/services/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-brasiers',
  templateUrl: './card-brasiers.component.html',
  styleUrls: ['./card-brasiers.component.css']
})
export class CardBrasiersComponent {
//coleccion de todos los productos de forma local
coleccionProductos: Productos[]=[];

//coleccion de productos de una sola categoria
coleccionBrasiers: Productos[]=[];

//variable para seleccionar productos especificos
productoSeleccionado!: Productos;
//variable para manejar estado del modal
modalVisible: boolean =false;

// patentamos de froma local el servicio para acceder en eñ 
constructor(public servicioCrud: CrudService){
}


//inicializa al momento que renderiza el componente
ngOnInit():void{

  //accedemos a metodo 'obtenerproductos'  y nos suscribimos a los cambios 
  //recibimos notificacion ante modificaciones
  this.servicioCrud.obtenerProductos().subscribe(producto=>{
    this.coleccionProductos= producto;

    //mostrara la coleccion de esa categoria 
    this.mostrarProductoBrasiers();
  })
}


//funcion para filtrar los productios del tipo "categoria"
mostrarProductoBrasiers(){
  //iteramos coleccion de productos con un  'forEach'
  this.coleccionProductos.forEach(producto=>{
    //si es de tipo"accesorios" -> condicional
    if(producto.categoria=== "brasiers"){
      //lo sube/guarda enla coleccion de productos de tipo "accesorios"
      this.coleccionBrasiers.push(producto);
    }
  })
}

mostrarVer(info:Productos){
  this.modalVisible=true;

  this.productoSeleccionado=info;
}
alert(){
  Swal.fire({
    title: "ATENCIÓN",
    text: "Nuestro carrito está en construcción",
    icon: "info"
  });
}
}
