import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrasiersComponent} from './pages/brasiers/brasiers.component';
import { BombachasComponent } from './pages/bombachas/bombachas.component';
import { ConjuntosComponent } from './pages/conjuntos/conjuntos.component';
import { MediasComponent } from './pages/medias/medias.component';
import { ProductoModule } from './producto.module';
import { BoxersComponent } from './pages/boxers/boxers.component';
import { ProductosComponent } from './pages/productos/productos.component';
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
    path:"boxers", component:BoxersComponent
  },
  {
    path:"productos",component:ProductosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
