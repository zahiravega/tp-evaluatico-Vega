import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarritoRoutingModule } from './carrito-routing.module';
import { PedidoComponent } from './components/pedido/pedido.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [
    PedidoComponent
  ],
  imports: [
    CommonModule,
    CarritoRoutingModule,
    MatIconModule,
    FormsModule,ReactiveFormsModule,
    MatGridListModule
  
    
  ],
  exports:[
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule 
  ]
})
export class CarritoModule { }
