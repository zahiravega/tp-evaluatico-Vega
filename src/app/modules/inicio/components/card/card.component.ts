import { Component } from '@angular/core';

//importo interfaz productos
import { Productos } from 'src/app/models/productos';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  //propiedad publica
  public info: Productos[];

  //inicializar la propiedad info
  constructor() {
    this.info = [

      {
        id: "",
        nombre: "Conjuntos de Algodón con Lycra Taza Soft ",
        descripcion: "Talles: 85, 90, 95, 100 ",
        descripcion2:"Detalles: Algodón con Lycra ",
        precio: "$7.000",
        imagen: "https://d22fxaf9t8d39k.cloudfront.net/875dffe0516d6f3f592c3ccd61134b8bef0ed5d3928b758a0bfbf4e822c7e64a296073.jpg"
      },

      {
        id: "",
        nombre: "Conjuntos Deportivos Calvin Klein",
        descripcion: "Talles: 85, 90, 95, 100 ",
        descripcion2:"Material: Algodon con lycra",
        precio: "$3.100",
        imagen: "https://d22fxaf9t8d39k.cloudfront.net/f03467a392f3135a1db4c79356303df32a16542eba802f3341aeae5ca597ea05296073.jpg"
      },

      {
        id: "",
        nombre: "Conjuntos de encaje Calvin Klein",
        descripcion: "Talles del 85 al 105",
        descripcion2: "Marca: Calvin Klein",
        precio: "$2.100",
        imagen: "https://d22fxaf9t8d39k.cloudfront.net/93d9e872f2720f1acd1e66c607731c050d14ca8bd93ebedc49651dbd96758d96296073.jpg"
      },

      {
        id: "",
        nombre: "Less Calvin Klein ",
        descripcion: "Talle único. Ceden hasta un 42 de pantalón ",
        descripcion2: "Material: Algodon con lycra",
        precio: "$1.500",
        imagen: "https://d22fxaf9t8d39k.cloudfront.net/26a49cdccc0e6d5c3d85665377816327d9013951fda0006aa6d85a5f60c7b006296073.jpg"
      }

    ]
  }

}
