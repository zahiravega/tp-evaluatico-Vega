import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';

import { CardComponent } from './components/card/card.component';
import { InicioComponent } from './components/inicio/inicio.component';

//componentes de angular material
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    
    CardComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule
  ],
  exports:[
    MatButtonModule,
    CardComponent,
    MatCardModule,
    MatExpansionModule,
    MatIconModule
  ]
})
export class InicioModule { }
