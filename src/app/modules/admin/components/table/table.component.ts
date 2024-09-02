import { Component } from '@angular/core';
import { Productos } from 'src/app/models/productos';
import { CrudService } from '../../services/crud.service';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  //coleccion local de productos (definida como array)
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
    categoria: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required),
    alt: new FormControl('', Validators.required),
  })
  constructor(public servicioCrud: CrudService) { }
}
