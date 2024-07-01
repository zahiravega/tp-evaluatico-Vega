import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutentificacionRoutingModule } from './autentificacion-routing.module';
import { InicioDeSesionComponent } from './pages/inicio-de-sesion/inicio-de-sesion.component';
import { ResgistroComponent } from './pages/resgistro/resgistro.component';


//componentes de material
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    InicioDeSesionComponent,
    ResgistroComponent
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule,
    //MATERIAL
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatGridListModule,
    //angular
    FormsModule
  ],

  exports:[
    InicioDeSesionComponent,
    ResgistroComponent,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatGridListModule,
    FormsModule
  ]
})
export class AutentificacionModule { }