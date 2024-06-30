import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/components/inicio/inicio.component';

const routes: Routes = [
  //ruta por defecto en la inicializacion 

  {
    path: "", component:InicioComponent
  },

  //ruta que vincula al modulo de incio y todo su contenido 
  {
    path: "", loadChildren: () => import('./modules/inicio/inicio.module').then(m => m.InicioModule)
  },
  {
    path: "", loadChildren: () => import('./modules/producto/producto.module').then(m => m.ProductoModule)
  },
  {
    path: "", loadChildren:()=> import('./modules/autentificacion/autentificacion.module').then(m => m.AutentificacionModule)
  },
  {
    path: "", loadChildren:()=> import('./modules/contacto/contacto.module').then(m => m.ContactoModule)
  },
  {
    path: "", loadChildren:()=> import('./modules/guia-de-talles/guia-de-talles.module').then(m => m.GuiaDeTallesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
