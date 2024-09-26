import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactoComponent } from './contacto/contacto.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { TituloPrincComponent } from './pages/titulo-princ/titulo-princ.component';


@NgModule({
  declarations: [
    ContactoComponent,
    TituloPrincComponent
  ],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    MatGridListModule
  ]
})
export class ContactoModule { }
