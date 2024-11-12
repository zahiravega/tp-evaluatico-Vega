import { Component } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  alert(){
    Swal.fire({
      title: "¡Gmail enviado!",
      text: "¡Intentaremos enviarte una respuesta lo antes posible!",
      icon: "success"
    });
}
}
