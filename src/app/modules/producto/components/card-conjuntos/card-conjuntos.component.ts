import { Component } from '@angular/core';
import { Productos } from 'src/app/models/productos';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

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

}
