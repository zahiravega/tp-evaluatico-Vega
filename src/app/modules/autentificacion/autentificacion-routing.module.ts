import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResgistroComponent } from './pages/resgistro/resgistro.component';
import { InicioDeSesionComponent } from './pages/inicio-de-sesion/inicio-de-sesion.component';

const routes: Routes = [

  {
    path:"registro", component:ResgistroComponent
  },
  {
    path:"iniciosesion", component:InicioDeSesionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutentificacionRoutingModule { }
