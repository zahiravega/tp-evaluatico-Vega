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

  nombreImagen!: string; // obtendrá el nombre de la imagen

  imagen!: string; // obtendrá la ruta de la imagen

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
    //imagen: new FormControl('', Validators.required),
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
        imagen: '',
        alt: this.producto.value.alt!
      }
      // Enviamos nombre y url de la imagen; definimos carpeta de imágenes como "productos"
      await this.servicioCrud.subirImagen(this.nombreImagen, this.imagen, "productos")
        .then(resp => {
          // encapsulamos respuesta y envíamos la información obtenida
          this.servicioCrud.obtenerUrlImagen(resp)
            .then(url => {
              // ahora método crearProducto recibe datos del formulario y URL creada
              this.servicioCrud.crearProducto(nuevoProducto, url)
                .then(producto => {
                  alert("Ha agregado un nuevo producto con éxito.");

                  // Resetea el formulario y las casillas quedan vacías
                  this.producto.reset();
                })
                .catch(error => {
                  alert("Ha ocurrido un error al cargar un producto.");

                  this.producto.reset();
                })
            })
        })
    }
  };

  // CARGAR IMÁGENES
  cargarImagen(event: any) {
    // Variable para obtener el archivo subido desde el input del HTML
    let archivo = event.target.files[0];

    // Variable para crear un nuevo objeto de tipo "archivo" o "file" y leerlo
    let reader = new FileReader();

    if (archivo != undefined) {
      /*
        Llamamos a método readAsDataURL para leer toda la información recibida
        Envíamos como parámetro al "archivo" porque será el encargador de tener la 
        info ingresada por el usuario
      */
      reader.readAsDataURL(archivo);

      // Definimos qué haremos con la información mediante función flecha
      reader.onloadend = () => {
        let url = reader.result;

        // Condicionamos según una URL existente y no "nula"
        if (url != null) {
          // Definimos nombre de la imagen con atributo "name" del input
          this.nombreImagen = archivo.name;

          // Definimos ruta de la imagen según la url recibida
          this.imagen = url.toString();
        }
      }
    }
  }

  //funcion vinculada al modal y el boton de la tabla
  mostrarBorrar(productoSeleccionado: Productos) {
    this.modalVisibleProducto = true;

    this.productoSeleccionado = productoSeleccionado;

  }

  borrarProducto(){
    //ahora enviamos tanto el ID del producto (para identificarlo en firestore) y la url de la imagen (para identificarlo en storage)
    this.servicioCrud.eliminarProducto(this.productoSeleccionado.idProducto, this.productoSeleccionado.imagen)
    
  .then(respuesta=> {
    alert ("se ha podido eliminar con exito");
  })
  .catch(error =>{
    alert("ha ocurrido un error al eliminar el producto: \n"+error)

  })
  }


  // EDITAR PRODUCTOS
  // Se envía y llama al momento que tocamos botón "Editar" de la tabla
  mostrarEditar(productoSeleccionado: Productos) {
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
    
      alt: productoSeleccionado.alt
    })
  }

  // VINCULA A BOTÓN "editarProducto" del modal de "Editar"
  editarProducto() {
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
      imagen: this.productoSeleccionado.imagen,
      alt: this.producto.value.alt!
    }

    //verificamos si el usuario ingresa o no una nueva imagen
    if(this.imagen){
      this.servicioCrud.subirImagen(this.nombreImagen, this.imagen, "productos")
      .then(resp=>{
        this.servicioCrud.obtenerUrlImagen(resp)
        .then(url=>{
          datos.imagen = url; //actualizamos URL de la imagen en los datos del formulario

          this.actualizarProducto(datos);

          this.producto.reset();
        })
        .catch(error =>{
          alert("hubo un problema al subir la imagen: \n"+error);

          this.producto.reset();
        })
      })
    }else{
      /*
      actulaizamos formulario con los datos recibidos del usuario, pero sin
      modificar la imagen ya existente en Firestore y en Storage */

      this.actualizarProducto(datos);
    }
}
//ACTUALIZAR la informacion ya existente de los productos
actualizarProducto(datos:Productos){
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
