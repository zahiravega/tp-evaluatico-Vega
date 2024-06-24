import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutentificacionRoutingModule } from './autentificacion-routing.module';
import { InicioDeSesionComponent } from './pages/inicio-de-sesion/inicio-de-sesion.component';
import { ResgistroComponent } from './pages/resgistro/resgistro.component';


@NgModule({
  declarations: [
    InicioDeSesionComponent,
    ResgistroComponent
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule
  ]
})
export class AutentificacionModule { }
