import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrasiersComponent} from './pages/brasiers/brasiers.component';
import { BombachasComponent } from './pages/bombachas/bombachas.component';
import { ConjuntosComponent } from './pages/conjuntos/conjuntos.component';
import { MediasComponent } from './pages/medias/medias.component';
import { ProductoModule } from './producto.module';
const routes: Routes = [
  {
    path:"corpiños", component:BrasiersComponent
  },
  {
    path:"bombachas", component:BombachasComponent
  },
  {
    path:"conjuntos", component:ConjuntosComponent
  },
  {
    path:"medias", component:MediasComponent
  },
  {
    path:"productos",component:ProductoModule
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
