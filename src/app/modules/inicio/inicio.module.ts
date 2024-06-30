import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';

import { CardComponent } from './components/card/card.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CategoriasComponent } from './components/categorias/categorias.component';

//componentes de angular material
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ContactoComponent } from './components/contacto/contacto.component';

@NgModule({
  declarations: [
    
    CardComponent,
    InicioComponent,
    CarruselComponent,
    CategoriasComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatGridListModule
  ],
  exports:[
    MatButtonModule,
    CardComponent,
    CategoriasComponent,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatGridListModule
  ]
})
export class InicioModule { }
