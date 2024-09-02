import { Component } from '@angular/core';
import { Productos } from 'src/app/models/productos';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  //creamos coleccion local de productos -> la definimos como array
  coleccionProductos: Productos[] = [];

  productoSeleccionado!: Productos; // ! <- tomar valores vacios

  modalVisibleProducto: boolean = false;

  //definimos formulario para los productos

  /*
Los atributos alfanumericos (string) se inicializan con comillas simples 
y atributos numericos (number) se inicializan en 0
  */
  producto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required),
    descripcion: new FormControl('', Validators.required),
    descripcion2: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required),
    alt: new FormControl('', Validators.required),
  })
  constructor(public servicioCrud: CrudService) { }

  ngOnInit(): void {
    this.servicioCrud.obtenerProductos().subscribe(producto => {
      this.coleccionProductos = producto;
    })
  }

  async agregarProducto() {
    if (this.producto.valid) {
      let nuevoProducto: Productos = {
        idProducto: '',
        nombre: this.producto.value.nombre!,
        precio: this.producto.value.precio!,
        descripcion: this.producto.value.descripcion!,
        descripcion2: this.producto.value.descripcion2!,
        categoria: this.producto.value.categoria!,
        imagen: this.producto.value.imagen!,
        alt: this.producto.value.alt!
      }
      await this.servicioCrud.crearProducto(nuevoProducto)
        .then(producto => {
          alert("Se agrego el nuevo producto con exito")
        })

        .catch(error => {
          alert("Ocurrió un error al agregar el producto")
        })
    }
  };

  //funcion vinculada al modal y el boton de la tabla
  mostrarBorrar(productoSeleccionado:Productos){
    this.modalVisibleProducto=true;

    this.productoSeleccionado=productoSeleccionado;

  }

  borrarProducto(){
    this.servicioCrud.eliminarProducto(this.productoSeleccionado.idProducto)
    
  .then(respuesta=> {
    alert ("se ha podido eliminar con exito");
  })
  .catch(error =>{
    alert("ha ocurrido un error al eliminar el producto: \n"+error)

  })
  }


  // EDITAR PRODUCTOS
  // Se envía y llama al momento que tocamos botón "Editar" de la tabla
  mostrarEditar(productoSeleccionado: Productos){
    this.productoSeleccionado = productoSeleccionado;
    /*
      Toma los valores del producto seleccionado y los va a
      autocompletar en el formulario del modal (menos el ID)
    */
    this.producto.setValue({
      nombre: productoSeleccionado.nombre,
      precio: productoSeleccionado.precio,
      descripcion: productoSeleccionado.descripcion,
      descripcion2: productoSeleccionado.descripcion2,
      categoria: productoSeleccionado.categoria,
      imagen: productoSeleccionado.imagen,
      alt: productoSeleccionado.alt
    })
  }

  // VINCULA A BOTÓN "editarProducto" del modal de "Editar"
  editarProducto(){
    let datos: Productos = {
      // Solo idProducto no se modifica por el usuario
      idProducto: this.productoSeleccionado.idProducto,
      /* Los demás atributos reciben nueva información/ 
      valor desde el formulario */
      nombre: this.producto.value.nombre!,
      precio: this.producto.value.precio!,
      descripcion: this.producto.value.descripcion!,
      descripcion2: this.producto.value.descripcion2!,
      categoria: this.producto.value.categoria!,
      imagen: this.producto.value.imagen!,
      alt: this.producto.value.alt!
    }

    // Enviamos al método el id del producto seleccionado y los datos actualizados
    this.servicioCrud.modificarProducto(this.productoSeleccionado.idProducto, datos)
    .then(producto => {
      alert("El producto se ha modificado con éxito.");
    })
    .catch(error => {
      alert("Hubo un problema al modificar el producto: \n"+error);
    })
  }
}