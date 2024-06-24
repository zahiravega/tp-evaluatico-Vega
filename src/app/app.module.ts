import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutentificacionComponent } from './autentificacion/autentificacion.component';
import { InicioComponent } from './modules/inicio/inicio.component';
import { ProductoComponent } from './modules/producto/producto.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AutentificacionComponent,
    InicioComponent,
    ProductoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
