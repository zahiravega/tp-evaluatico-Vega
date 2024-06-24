import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { BrasiersComponent } from './brasiers/brasiers.component';
import { ColalessComponent } from './colaless/colaless.component';
import { ConjuntosComponent } from './conjuntos/conjuntos.component';
import { MediasComponent } from './medias/medias.component';


@NgModule({
  declarations: [
    BrasiersComponent,
    ColalessComponent,
    ConjuntosComponent,
    MediasComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }