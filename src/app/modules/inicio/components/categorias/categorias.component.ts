import { Component } from '@angular/core';


//interfaz Categories
import { Categories } from 'src/app/models/categories';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {

  public img: Categories[];

  constructor(){

    this.img = [
   {
    id:"",
    router: "conjuntos",
    categoria:"1.png"

   },

   {
    id:"",
    router: "corpiños",
    categoria:"3.png"

   },
   {
    id:"",
    router: "bombachas",
    categoria:"2.png"

   }

    ]
  }

}
