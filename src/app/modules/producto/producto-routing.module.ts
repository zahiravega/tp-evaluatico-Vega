import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrasiersComponent } from './brasiers/brasiers.component';
import { ColalessComponent } from './colaless/colaless.component';
import { ConjuntosComponent } from './conjuntos/conjuntos.component';
import { MediasComponent } from './medias/medias.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  {
    path:"corpiños", component:BrasiersComponent
  },
  {
    path:"bombachas", component:ColalessComponent
  },
  {
    path:"conjuntos", component:ConjuntosComponent
  },
  {
    path:"medias", component:MediasComponent
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
