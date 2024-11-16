import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/components/inicio/inicio.component';
//guardian para la vista del administrador 
import { rutaProtegidaGuard } from './guards/ruta-protegida.guard';
import { rutaProtegidaCarritoGuard } from './guards/ruta-protegida-carrito.guard';



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
    path: "", loadChildren: () => import('./modules/producto/producto.module').then(m => m.ProductoModule),

  },
  {
    path: "", loadChildren:()=> import('./modules/autentificacion/autentificacion.module').then(m => m.AutentificacionModule)
  },
  {
    path: "", loadChildren:()=> import('./modules/contacto/contacto.module').then(m => m.ContactoModule)
  },
  {
    path: "", loadChildren:()=> import('./modules/guia-de-talles/guia-de-talles.module').then(m => m.GuiaDeTallesModule)
  },
  {
    path: "", loadChildren:()=> import('./modules/admin/admin.module').then(m => m.AdminModule),
    //deifinirle al guardian que proteja la ruta de ADMIN y que espere un rol de tipo ADMIN
    canActivate:[rutaProtegidaGuard],data:{ role:'admin'}
  },
  {
    path:"", loadChildren:()=> import('./modules/carrito/carrito.module').then(m => m.CarritoModule),
    //deifinirle al guardian que proteja la ruta de ADMIN y que espere un rol de tipo ADMIN
    canActivate:[rutaProtegidaCarritoGuard],data:{ role:'usuario'}
  },
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
