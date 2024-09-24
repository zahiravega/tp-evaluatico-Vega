import { Component } from '@angular/core';
import { Productos } from 'src/app/models/productos';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-card-medias',
  templateUrl: './card-medias.component.html',
  styleUrls: ['./card-medias.component.css']
})
export class CardMediasComponent {
 //coleccion de todos los productos de forma local
 coleccionProductos: Productos[]=[];

 //coleccion de productos de una sola categoria
 coleccionMedias: Productos[]=[];
 
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
     this.mostrarProductoMedias();
   })
 }
 
 
 //funcion para filtrar los productios del tipo "categoria"
 mostrarProductoMedias(){
   //iteramos coleccion de productos con un  'forEach'
   this.coleccionProductos.forEach(producto=>{
     //si es de tipo"accesorios" -> condicional
     if(producto.categoria=== "medias"){
       //lo sube/guarda enla coleccion de productos de tipo "accesorios"
       this.coleccionMedias.push(producto);
     }
   })
 }
 
 mostrarVer(info:Productos){
   this.modalVisible=true;
 
   this.productoSeleccionado=info;
 }

}
