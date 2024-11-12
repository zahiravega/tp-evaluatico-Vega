import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared/shared.module';
import { FormsModule } from '@angular/forms';

//importaciones de FIREBASE (herramientas de la base de datos)
import { enviroment } from 'src/enviroments/enviroment';// vincula la bd a la app
import{AngularFireModule} from '@angular/fire/compat';//trabaja con las colacciones de informacion
import {AngularFireAuthModule} from '@angular/fire/compat/auth';// trabaja con la autentififcacion
import {AngularFireStorageModule} from '@angular/fire/compat/storage';// trabaja con imagenes y archivos




@NgModule({
  declarations: [
    AppComponent,

 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //componentes globales
    SharedModule,
    
    FormsModule, // Asegúrate de importar FormsModule para ngModel
    //vinculacion con firebase
    AngularFireModule.initializeApp(enviroment.firebaseConfig), //inicializar firebase dentro del proyecto
    AngularFireAuthModule,
    AngularFireStorageModule,
  


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
