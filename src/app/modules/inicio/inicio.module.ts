import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { ComponentsComponent } from './components/components.component';
import { CardComponent } from './components/card/card.component';
import { IncioComponent } from './components/incio/incio.component';
import { InicioComponent } from './components/inicio/inicio.component';


@NgModule({
  declarations: [
    ComponentsComponent,
    CardComponent,
    IncioComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
